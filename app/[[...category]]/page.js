import HomeContainer from '@/containers/home'
import React from 'react'
import Movies from '@/mocks/movies.json'


const API_URL = process.env.API_URL; 

const getPopularMovies = async () => {
   const response = await fetch(`${API_URL}/movie/popular?api_key=${process.env.THE_MOVIE_DB_API_KEY}&page=1`)

   return response.json();
}

const getSingleCategory = async (genreId) => {
  const response = await fetch(`${API_URL}/discover/movie?api_key=${process.env.THE_MOVIE_DB_API_KEY}&page=1&with_genres=${genreId}`)

  return response.json();
}

const getTopRatedMovies = async () => {
  const response = await fetch(`${API_URL}/movie/top_rated?api_key=${process.env.THE_MOVIE_DB_API_KEY}&page=1`)

  return response.json();
}

const getCategories = async () => {
  const response = await fetch(`${API_URL}/genre/movie/list?api_key=${process.env.THE_MOVIE_DB_API_KEY}&page=1`)

  return response.json();
}

function delay(ms){
    return new Promise((resolve) => setTimeout(resolve,ms))
}

export default async function Home({params}) {

  const popularPromise = getPopularMovies();
  const topRatedPromise = getTopRatedMovies();
  const categoryPromise = getCategories();

  const [
    {results: popularMovies},
    {results: topRatedMovies},
    {genres: categories},
  ] = await Promise.all([popularPromise,
                        topRatedPromise,
                        categoryPromise
                      ]) 

  let selectedCategory;
  if (params.category?.length > 0){
    const { results } = await getSingleCategory(params.category[0])
    selectedCategory = results;
   }


  return (
    <HomeContainer 
    popularMovies = {popularMovies}
    topRatedMovies = {topRatedMovies}
    categories = {categories}
      selectedCategory= {{
          id: params.category?.[0] ?? "",
          movies: selectedCategory ? selectedCategory.slice(1,7) : []
      }}
    />
  )
}
