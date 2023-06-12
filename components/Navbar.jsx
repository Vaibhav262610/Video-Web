import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='navbar flex justify-center z-10 p-8 w-full'>
        <div className='flex justify-between nav'>

            <h1 className='font-black text-white text-6xl  '>
              <Link href='/'>VR</Link>
            </h1>

            <div className='nav_list'>
            <button className='main-button text-white hover:text-yellow-400 hover:border-yellow-400'>HOME</button>
            <button className='main-button text-white hover:text-yellow-400 hover:border-yellow-400'>ABOUT</button>
            <button className='main-button text-white hover:text-yellow-400 hover:border-yellow-400'>DEMOS</button>
            <button className='main-button text-white hover:text-yellow-400 hover:border-yellow-400'>BENIFITS</button>
            <button className='main-button text-white hover:text-yellow-400 hover:border-yellow-400'>3-STEP-METHOD</button>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar