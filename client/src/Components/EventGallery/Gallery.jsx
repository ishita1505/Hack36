import React from 'react'
import images from './images'
export default function Gallery(){

    return (
        <div className='flex flex-col items-center py-8 my-8 bg-gradient-to-br from-white via-blue-200 to-white'>
            <div className='text-2xl font-bold text-blue-700 uppercase md:text-4xl sm:text-3xl'>our events gallery</div>
            <hr className='w-20 h-1 mt-1 mb-2 transform -translate-x-5 bg-blue-700 rounded-lg md:mt-2 md:-translate-x-8 md:mb-4 sm:w-24'/>
            <div className='grid grid-cols-1 gap-3 px-4 py-2 my-4 lg:gap-5 sm:px-8 lg:px-20 sm:grid-cols-2 md:grid-cols-3'>
                {images.map(image=>(<div className='col-span-1 duration-500 transform hover:scale-105'>
                    <img src={process.env.PUBLIC_URL+image} alt="" className="object-fill rounded-lg"/>
                    </div>))}
            </div>
        </div>
    )
}