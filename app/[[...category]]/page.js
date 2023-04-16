import HomeContainer from '@/containers/home'
import React from 'react'
import Movies from '@/mocks/movies.json'

function delay(ms){
    return new Promise((resolve) => setTimeout(resolve,ms))
}

export default async function Home({params}) {
    await delay(20000)
  let selectedCategory;
  if (params.category?.length > 0){selectedCategory = true }

  return (
    <HomeContainer selectedCategory= {{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(1,7) : []
    }}/>
  )
}
