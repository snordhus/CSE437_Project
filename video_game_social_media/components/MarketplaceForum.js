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

function MarketplaceForum(){
    return (
 
 


  <div class="pl-96">
    <header class=" bg-black sticky top-0 w-full px-5 py-2 flex justify-between items-center">
      <div class="px-2">
        Marketplace
      </div>
      <div class="px-2">
          Clearance
      </div>
      <div class="px-2">
          New
      </div>
      <div class="px-2">
          Popular
      </div>
      <form class="pl-96">   
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
          <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Games..." required>
              </input>
          </div>
      </form>
    </header>
    <main></main>
    <footer class="mt-4">

      <div className='container columns-2'>
      <Image src={require('./images/mcraftTest.png')} alt="thumbnail" width={300} height={150} className=" place-items-center"/>
      <div>
        MINECRAFT <br />
        $19.99 <br />
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          BUY NOW
        </button>
      </div>
  
      </div>

    </footer>
  </div>
  

    )
}

export default MarketplaceForum