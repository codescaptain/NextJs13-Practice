import HomeContainer from '@/containers/home'
import React from 'react'
import Movies from '@/mocks/movies.json'

export default function Home({params}) {
  let selectedCategory;
  if (params.category?.length > 0){selectedCategory = true }

  return (
    <HomeContainer selectedCategory= {{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(1,7) : []
    }}/>
  )
}
