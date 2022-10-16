import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <main className="bg-blue-400 min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar/>
      </main>
    </div>
  )
}
