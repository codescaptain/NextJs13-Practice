import MovieContainer from '@/containers/movie'
import { notFound } from "next/navigation";
import React from 'react'
import Movies from '@/mocks/movies.json'

const API_URL = process.env.API_URL; 

const getMovie = async (movieId) => {
   const response = await fetch(`${API_URL}/movie/${movieId}?api_key=${process.env.THE_MOVIE_DB_API_KEY}&page=1`)

   return response.json();
}



export default async function MoviePage({ params, searchParams }) {
    const movieDetail = await getMovie(params.id)
    
    if(!movieDetail){
      notFound()
    }
    
  return (
    <MovieContainer movie={movieDetail} />
  )
}
