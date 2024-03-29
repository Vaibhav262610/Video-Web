
import Head from 'next/head'
import React from 'react'
import Boxes from '@/components/Boxes'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const Long = ({ProjectName , image , link}) => {
  return (
    <>
    <Head>
      <title>PLAYLISTS</title>
    </Head>
    <div className='playlist flex flex-col justify-center items-center gap-6 items-center'>
                    <h1 className='long text-white font-bold text-7xl'>VFX / EXTRA <span className='render'>VIDEO</span> CONTENT</h1>
                    <h1 className='work_sub text-lg'>LOOK WHAT ARE YOU SEARCHING FOR ------</h1>
                </div>
    <div className='work flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <div className='boxes gap-14 sm:flex-row flex-col'>
                 <Boxes 
                  ProjectName = "METRACK TEASER"
                  image = '/5.jpg'
                  link = 'https://youtu.be/KaPjkj5WAaI'
                 />
                 <Boxes 
                  ProjectName = "TOKA"
                  image= '/2.jpg'
                  link = 'https://toka-vr.vercel.app/'
                />
                  <Boxes 
                   ProjectName = "ADDIDAS-CLONE"
                   image= '/3.jpg'
                   link = 'https://adidas-clone-indol.vercel.app/'
                 />
                 <Boxes 
                  ProjectName = "AGENCY"
                  image= '/4.jpg'
                  link = 'https://agency-website-vr.vercel.app/'
                />
                 <Boxes 
                  ProjectName = "ISRO-CLONE"
                  image= '/5.jpg'
                  link = 'https://isro-clone-redesign.vercel.app/'
                  />
                  <Boxes 
                   ProjectName = "WEATHER-APP"
                   image= '/2.jpg'
                   link = 'https://weather-app-six-black.vercel.app/'
                   />
            
             </div>
            </div>
        </div>
    </>
  )
}

export default Long
