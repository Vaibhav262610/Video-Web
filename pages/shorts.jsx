
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
                    <h1 className='long text-white font-bold text-7xl'>SHORT <span className='render'>VIDEO</span> CONTENT</h1>
                    <h1 className='work_sub text-lg'>LOOK WHAT ARE YOU SEARCHING FOR ------</h1>
                </div>
    <div className='work flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <div className='boxes gap-14 sm:flex-row flex-col'>
                 <Boxes 
                  ProjectName = "METRACK TEASER"
                  image = '/2.jpg'
                  link = 'https://youtube.com/shorts/vu2wvjGouoY?feature=share'
                 />
                 <Boxes 
                  ProjectName = "TOKA"
                  image= '/2.jpg'
                  link = 'https://youtube.com/shorts/JMhp8XIHA-8?feature=share'
                />
                  <Boxes 
                   ProjectName = "ADDIDAS-CLONE"
                   image= '/2.jpg'
                   link = 'https://youtube.com/shorts/MhE23ESOXVE?feature=share'
                 />
                 <Boxes 
                  ProjectName = "AGENCY"
                  image= '/2.jpg'
                  link = 'https://youtube.com/shorts/MhE23ESOXVE?feature=share'
                />
                 <Boxes 
                  ProjectName = "ISRO-CLONE"
                  image= '/2.jpg'
                  link = 'https://youtube.com/shorts/WgnyJ31KGnw?feature=share'
                  />
                  <Boxes 
                   ProjectName = "WEATHER-APP"
                   image= '/2.jpg'
                   link = 'https://youtube.com/shorts/WgnyJ31KGnw?feature=share'
                   />
            
             </div>
            </div>
        </div>
    </>
  )
}

export default Long
