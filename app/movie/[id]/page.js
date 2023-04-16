import MovieContainer from '@/containers/movie'
import { notFound } from "next/navigation";
import React from 'react'
import {getMovie} from '@/services/movie'

export default async function MoviePage({ params, searchParams }) {
    const movieDetail = await getMovie(params.id)
    
    if(!movieDetail){
      notFound()
    }
    
  return (
    <MovieContainer movie={movieDetail} />
  )
}
