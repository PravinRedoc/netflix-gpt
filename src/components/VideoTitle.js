import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute bg-gradient-to-r from-black text-white'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-white font-bold text-black p-4 px-16 text-xl rounded-md hover:bg-opacity-50'>Play</button>
            <button className='bg-gray-500 p-4 px-16 text-xl bg-opacity-40 rounded-md m-2'>More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle