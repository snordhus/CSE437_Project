import React from 'react'
import Link from 'next/link'


function SidebarLink({Icon, text, active}) {
  if (text == 'User') {
    return(
    <Link href="/login" className="hidden xl:inline">
      <a>
        <div className={`text-black flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold"}`}>
          <Icon className="h-7"/>
          <span className="hidden xl:inline">{text}</span>
        </div>
      </a>
    </Link>
    )} 
    else if (text == 'Marketplace') {
      return(
      <Link href="/marketplace" className="hidden xl:inline">
            <a>
              <div className={`text-black flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold"}`}>
                <Icon className="h-7"/>
                <span className="hidden xl:inline">{text}</span>
              </div>
            </a>
      </Link>
      )} 
      else if (text == 'Home') {
        return(
        <Link href="/" className="hidden xl:inline">
              <a>
                <div className={`text-black flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold"}`}>
                  <Icon className="h-7"/>
                  <span className="hidden xl:inline">{text}</span>
                </div>
              </a>
        </Link>
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
