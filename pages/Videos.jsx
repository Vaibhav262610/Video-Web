import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'


const Boxes = ({ProjectName , image , link}) => {
  return (
    <>
    <Head>
      <title>PLAYLISTS</title>
    </Head>
    <Navbar />
    <div className='playlist pt-96 flex justify-center items-center'>
      <h1 className=' text-7xl font-bold'> PLAYLISTS</h1>
    </div>
    <div className='playlist_btns flex flex-col gap-8  '>
      <Link href='/Long'>
       <button className='playlist_btn '>LONG VIDEO CONTENT</button>
      </Link>
      <Link href='/shorts'>
       <button className='playlist_btn '>SHORT VIDEO CONTENT</button>
      </Link>
      <Link href='/VFX'>
       <button className='playlist_btn '>VFX / EXTRA CONTENT</button>
      </Link>
    </div>
    </>
  )
}

export default Boxes