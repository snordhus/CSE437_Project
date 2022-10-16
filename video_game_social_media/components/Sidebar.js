import React from 'react'
import Image from 'next/image'
import SidebarLink from './SidebarLink'
import {HomeIcon} from '@heroicons/react/24/solid'
import {
  PuzzlePieceIcon,
  ChatBubbleBottomCenterIcon,
  UserCircleIcon,
  BuildingStorefrontIcon
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
    </div>
  )
}

export default Sidebar

