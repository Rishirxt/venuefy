import React from 'react'
import { languages } from '../../utils/constants'

const MovieFilters = () => {
  return (
    <div className='w-full md:w-1/4 p-4 space-y-4'>
        <h2 className='text-2xl font-semibold'>Filters</h2>
        <div className='bg-white p-4 rounded-md min-h-[120px]'>
            <div className='flex justify-between items-center mb-3'>
                <span className='font-medium'>Languages</span>
                <button className='text-[#f74362] text-sm hover:underline'>Clear</button>
            </div>
            <div className='flex flex-wrap gap-2'>
                {
                    languages.map((lang,i) => (
                        <span key={i} className='border border-gray-200 text-[#f74362] px-3 py-1 text-sm rounded hover:bg-gray-100 cursor-pointer'>
                            {lang}
                        </span>
                    ))
                }
            </div>
        </div>
        <div className='bg-white p-4 rounded-md min-h-[120px]'>
            <div className='flex justify-between items-center mb-3'>
                <span className='font-medium'>Genres</span>
                <button className='text-[#f74362] text-sm hover:underline'>Clear</button>
            </div>
        </div>
        <div className='bg-white p-4 rounded-md min-h-[120px]'>
            <div className='flex justify-between items-center mb-3'>
                <span className='font-medium'>Format</span>
                <button className='text-[#f74362] text-sm hover:underline'>Clear</button>
            </div>
        </div>
        <button className='w-full border cursor-pointer bg-[#f74362] text-white py-2 rounded hover:bg-[#d73756] transition-colors duration-200'>
            Browse by Cinemas
        </button>
    </div>
  )
}

export default MovieFilters