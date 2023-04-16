import HomeContainer from '@/containers/home'
import React from 'react'
import {
  getPopularMovies,
  getSingleCategory,
  getTopRatedMovies,
  getCategories
} from '@/services/movie'

export default async function Home({params}) {
  
  const [
    {results: popularMovies},
    {results: topRatedMovies},
    {genres: categories},
  ] = await Promise.all([getPopularMovies(),
                         getTopRatedMovies(),
                         getCategories()
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
