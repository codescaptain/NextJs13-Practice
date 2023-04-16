import React from 'react'
import Movies from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'
import FeaturedMovie from '@/components/featured-movie'
import { Categories } from '@/components/categories'
import { MoviesSection } from '@/components/movies-section'

export default function HomeContainer({popularMovies, topRatedMovies, categories, selectedCategory}) {
  return (
    <div>
        <FeaturedMovie movie= {popularMovies?.[0]} />
        <Categories categories= {categories.slice(0,5)} />
        {
          selectedCategory.movies.length > 0 && (
                <MoviesSection title={categories.find(genre => `${genre.id}` === selectedCategory.id)?.name} movies={selectedCategory.movies} />
          )
        }
        <MoviesSection title={"Popular Fılms"} movies={popularMovies.slice(1,7)} />
        <MoviesSection title={"Your Favorites films"} movies={topRatedMovies.slice(7,13)} />
    </div>
  )
}
