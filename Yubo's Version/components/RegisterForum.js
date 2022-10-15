import React from 'react'
import Link from 'next/link'
import {HomeIcon} from '@heroicons/react/24/solid'
import {
  PuzzlePieceIcon,
  ChatBubbleBottomCenterIcon,
  UserCircleIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import $ from "jquery";

// https://v1.tailwindcss.com/components/forms

function RegisterForum(){
    return (
        
<div className="mt-16 items-center flex h-screen flex-col">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/4 m-auto" id='login-forum' action='/'>
  <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="firstname">
        First Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="First" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="lastname">
        Last Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Last" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="someone@somewhere.com" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password-2">
        Enter Your Password Again
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password-2" type="password-2" placeholder="******************" />
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" action='/'>
        Register
      </button>
    </div>
  </form>
  <div className='grid h-screen place-items-center'>
  <Link href="/" className="hidden xl:inline">
          <a ><Image src={require('./images/logo.png')} alt="Logo" width={100} height={100} className="grid h-screen place-items-center"/></a>
    </Link>
        {/* <Image src={require('./images/logo.png')} alt="Logo" width={100} height={100} className="grid h-screen place-items-center"/> */}
  </div>
</div>
    )
}

export default RegisterForum