import React from 'react'
import Image from 'next/image'
import SidebarLink from './SidebarLink'
import {
  HomeIcon,
  EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/solid'
import {
  PuzzlePieceIcon,
  ChatBubbleBottomCenterIcon,
  UserCircleIcon,
  BuildingStorefrontIcon,
} from '@heroicons/react/24/outline'

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
        <div className="flex items-center justify-center hoverAnimation w-14 h-14 p-0 xl:ml-24">
          <Image src={require('./images/logo.png')} alt="Logo" width={100} height={100}/>
        </div>
        <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
          <SidebarLink text="Home" Icon={HomeIcon} active/>
          <SidebarLink text="Game Forums" Icon={ChatBubbleBottomCenterIcon}/>
          <SidebarLink text="Marketplace" Icon={BuildingStorefrontIcon}/>
          <SidebarLink text="Daily Game" Icon={PuzzlePieceIcon}/>
          <SidebarLink text="User" Icon={UserCircleIcon}/>
        </div>
        <button className="hidden xl:inline xl:ml-24 bg-white text-black rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-blue-300">Create Post</button>
        <div className="text-gray-100 flex items-center justify-center hoverAnimation xl:ml-24 xl:-mr-5 mt-auto">
          <Image src={require('./images/kratos.jpg')} alt="User Icon" width={40} height={40} className="h-10 w-10 rounded-full"/>
          <div className="hidden xl:inline leading-5 xl:ml-2.5">
            <h4 className="font-bold">User 1</h4>
            <p className="text-black">@User1</p>
          </div>
          <EllipsisHorizontalCircleIcon className="h-5 hidden xl:inline ml-10"/>
        </div>
    </div>
  )
}

export default Sidebar

