import MovieContainer from '@/containers/movie'
import { notFound } from "next/navigation";
import React from 'react'
import Movies from '@/mocks/movies.json'

export default function MoviePage({ params, searchParams }) {
    const movieDetail = Movies.results.find((movie) => movie.id.toString() === params.id)
    
    if(!movieDetail){
      notFound()
    }
    
  return (
    <MovieContainer movie={movieDetail} />
  )
}
