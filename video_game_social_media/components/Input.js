import React from 'react'
import Image from 'next/image'
import {useState} from 'react'


function Input() {
    const[input,setInput] = useState("");
  return (
    <div className={`border-b border-white p-3 flex space-x-3 overflow-y-scroll`}>
        <Image src={require('./images/kratos.jpg')} alt="User Icon" width={40} height={40} layout="fixed" className="rounded-full cursor-pointer"/>
        <div className="w-full divide-y divide-white">
            <div className={``}>
                <textarea value={input} onChange={(e) => setInput(e.target.value)} rows="2" placeholder="Enter your post" className="bg-transparent outline-none text-lg placeholder-black tracking-wide w-full min-h-[50px]"/>
            </div>
        </div>
    </div>
    
  )
}

export default Input