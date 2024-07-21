import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useLocation ,useNavigate} from'react-router-dom'
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const Nav = () => {

  const [show,setShow] = useState(false);
  const { pathname } = useLocation();
  const [ searchValue, setSerchValue] = useState('');
  const navigate = useNavigate();

  // firebase auth
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  useEffect(()=>{
    window.addEventListener('scroll',handlScroll)

    return()=>{
      window.removeEventListener('scroll',handlScroll);
    }

  },[])

  const handlScroll = () => {
    if(window.scrollY > 50){
      setShow(true);
    }else{
      setShow(false);
    }
  }

  // 검색
  const handleChange = (e) =>{
    setSerchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`)
  }

  // Login button click handler
  const handleAuth = () => {
    signInWithPopup(auth, provider)
    .then(result => {})
    .catch(error => {
      console.error('Error signing in with Google', error);
    });
  }

  return (
    <NavWrapper show={show}>
      <Logo>
        <img alt="Disney Logo" src="/images/logo.svg" onClick={()=>(window.location.href='/')} />
        </Logo>

        {pathname === '/'  ? 
            <Login onClick={handleAuth}>Login </Login> : 
            <Input className='nav_input' 
                   type='text' 
                   placeholder='검색'
                   onChange={handleChange} />}
    </NavWrapper>
  )
}

export default Nav


const Login = styled.a`
  background-color: rgba(0,0,0,0.6);
  padding : 8px 16px;
  text-transform: uppercase;
  letter-spacing : 1.5px;
  border : 1px solid #f9f9f9;
  transition : all 0.2s ease 0s;

  &:hover{
    background-color: #f9f9f9;
    color: gray;
    border-color : transparent;
  }
`;

const Input = styled.input`
  position: fixed;
  left : 50%;
  transform: translate(-50%, 0);
  background-color: rgba(0,0,0,0.582);
  border-radius:5px;
  color: white;
  padding: 5px;
  border : none;
`;

const NavWrapper = styled.nav`
  position: fixed;
  top : 0;
  left : 0;
  right : 0;
  height : 70px;
  background-color : ${props=> props.show ? '#090b13':'transparent'};
  display : flex;
  justify-content: space-between;
  align-items : center;
  padding: 0 26px;
  letter-spacing: 16px;
  z-index:3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top : 4px;
  max-height: 70px;
  font-size: 0;
  display : inline-block;

  img{
    display: block;
    width:100%;
  }
`;

