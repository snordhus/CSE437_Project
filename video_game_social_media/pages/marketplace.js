import MarketplaceForum from "../components/MarketplaceForum"
import React from "react"
import Sidebar from '../components/Sidebar'

function Marketplace(){
    return(
        <main className="bg-blue-400 min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar/>
        
      
         <MarketplaceForum class="ml-96"/> 
        </main>
        )
}

export default Marketplace