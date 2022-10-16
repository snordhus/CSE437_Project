import React from 'react'
import Link from 'next/link'


function SidebarLink({Icon, text, active}) {
  if (text == 'User') {
    return(
    <div className={`text-black flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold"}`}>
    <Icon className="h-7"/>
    <Link href="/login" className="hidden xl:inline">
          <a >User</a>
    </Link>
  </div>
    )} 
    else if (text == 'Marketplace') {
      return(
      <div className={`text-black flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold"}`}>
      <Icon className="h-7"/>
      <Link href="/marketplace" className="hidden xl:inline">
            <a >Marketplace</a>
      </Link>
    </div>
      )} 
      else {
  return (
    <div className={`text-black flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold"}`}>
      <Icon className="h-7"/>
      <span className="hidden xl:inline">{text}</span>
    </div>
  )
  }
}

export default SidebarLink
