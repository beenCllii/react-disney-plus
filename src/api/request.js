const requests = {
    fetchNowPlaying : "movie/now_playing",
    fetchTrending: "/trending/all/week",
    fetchTopRated: "movie/top_rated",
    fetchActionMovies: "/discover/movie?with_genres=28",
    fetchComedyMovies: "/discover/movie?with_genres=35",
    fetchDramaMovies: "/discover/movie?with_genres=18",
    fetchHorrorMovies: "/discover/movie?with_genres=27",
    fetchWesternMovies: "/discover/movie?with_genres=30",
    fetchRomanMovies: "/discover/movie?with_genres=10749",
    fetchDocumentationMovies: "/discover/movie?with_genres=99",
}
export default requests;