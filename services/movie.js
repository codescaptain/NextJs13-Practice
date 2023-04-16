const API_URL = process.env.API_URL; 

const fetchMovieApi = async (pathname, query="") => {
    try{
        const response = await fetch(`${API_URL}${pathname}?api_key=${process.env.THE_MOVIE_DB_API_KEY}&${query}`)
        return response.json();
    } catch(error){
        throw new Error
    }
}

const getPopularMovies = async () => {
    return fetchMovieApi('/movie/popular', 'page=1')
 }
 
 const getSingleCategory = async (genreId) => {
   return fetchMovieApi('/discover/movie', `page=1&with_genres=${genreId}`)
 }
 
 const getTopRatedMovies = async () => {
   return fetchMovieApi('/movie/top_rated', 'page=1')
 }
 
 const getCategories = async () => {
   return fetchMovieApi('/genre/movie/list', 'page=1')
 }

 const getMovie = async (movieId) => { 
    return fetchMovieApi(`/movie/${movieId}`, 'page=1')
 }


export {
    fetchMovieApi,
    getPopularMovies,
    getSingleCategory,
    getTopRatedMovies,
    getCategories,
    getMovie
}