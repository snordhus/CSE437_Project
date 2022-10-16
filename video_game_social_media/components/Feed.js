import React from 'react'
import Input from './Input'

function Feed() {
  return (
    <div className="flex-grow border-l border-r border-white max-w-2xl sm:ml-[73px] xl:ml-[370px]">
        <div className="flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 border-b border-white">
            <h2 className="text-lg sm:text-xl font-bold">Video Game Social Media</h2>
        </div>
        <Input/>
    </div>
  )
}

export default Feed
