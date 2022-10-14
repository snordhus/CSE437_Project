import React from 'react'

function SidebarLink({Icon, text, active}) {
  return (
    <div className={`text-black flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold"}`}>
      <Icon classname="h-7"/>
      <span className="hidden xl:inline">{text}</span>
    </div>
  )
}

export default SidebarLink
