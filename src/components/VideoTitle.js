import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-12 absolute bg-gradient-to-r from-black text-white'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div className='mt-0 md:mt-1'>
            <button className='bg-white font-bold text-black py-1 md:py-4 px-2 md:px-16  text-xl rounded-md hover:bg-opacity-50'>Play</button>
            <button className='hidden md:inline-block bg-gray-500 p-4 px-16 text-xl bg-opacity-40 rounded-md m-2'>More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle