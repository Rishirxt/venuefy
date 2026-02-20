import React from 'react'
import { movies } from '../utils/constants'

const Recommended = () => {
  return (
    <div className='w-full py-6 bg-white'>
      <div className='max-w-screen-xl mx-auto px-4'>

        {/* Header */}
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-semibold'>Recommended Movies</h2>
          <span className='text-md text-red-500 font-semibold cursor-pointer hover:underline'>
            See All
          </span>
        </div>

        {/* Movie Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {movies.map((movie, i) => (
            <div
              key={i}
              className='rounded overflow-hidden cursor-pointer hover:scale-[1.03] transition-transform duration-200'
            >
              <div className='relative'>
                <img
                  src={movie.img}
                  alt={movie.title}
                  className='w-full h-[300px] object-cover rounded'
                />
              </div>

              <div className='bg-black text-white text-sm px-2 py-1 flex items-center justify-between'>
                <span>⭐ {movie.rating}/10</span>
                <span>{movie.votes} Votes</span>
              </div>

              <div className='px-1 py-2'>
                <h3 className='text-lg font-semibold leading-tight'>
                  {movie.title}
                </h3>
                <p className='text-sm text-gray-600'>
                  {movie.genre.replaceAll('/', ' ')}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Recommended
