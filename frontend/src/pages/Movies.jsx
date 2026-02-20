import React from 'react'
import Banner from '../components/shared/Banner'
import MovieFilters from '../components/movies/MovieFilters'
import MovieList from '../components/movies/MovieList'
const Movies = () => {
  console.log('Movies page rendered');
  return (
    <div>
        <Banner />
        <div className='flex flex-col md:flex-row bg-[#f5f5f5] min-h-screen
        md:px-[100px] pb-10 pt-8'>
            <MovieFilters />
            <MovieList />
        </div>
    </div>
  )
}

export default Movies