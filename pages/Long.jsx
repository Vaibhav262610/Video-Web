
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
                    <h1 className='long text-white font-bold text-7xl'>LONG <span className='render'>VIDEO</span> CONTENT</h1>
                    <h1 className='work_sub text-lg'>LOOK WHAT ARE YOU SEARCHING FOR ------</h1>
                </div>
    <div className='work flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <div className='boxes gap-14 sm:flex-row flex-col'>
                 <Boxes 
                  ProjectName = "METRACK TEASER"
                  image = '/2.jpg'
                  link = 'https://youtu.be/KaPjkj5WAaI'
                 />
                 <Boxes 
                  ProjectName = "SCP 545"
                  image= '/2.jpg'
                  link = 'https://youtu.be/5jiQINh-9aw'
                />
                  <Boxes 
                   ProjectName = "MICHAEL JORDAN"
                   image= '/2.jpg'
                   link = 'https://youtu.be/_nlhs-dI5jg'
                 />
                 <Boxes 
                  ProjectName = "SUPER MARIO EASTER EGGS"
                  image= '/2.jpg'
                  link = 'https://youtu.be/LM-Rgk2mroo'
                />
                 <Boxes 
                  ProjectName = "STEPHEN CURRY"
                  image= '/2.jpg'
                  link = 'https://youtu.be/0ZcjzoiKEiU'
                  />
                  <Boxes 
                   ProjectName = "NBA PLAYER HATE EACH OTHER"
                   image= '/2.jpg'
                   link = 'https://youtu.be/qJ0Pu_-ZaMQ'
                   />
                  <Boxes 
                   ProjectName = "KANYE WEST EXPOSES"
                   image= '/2.jpg'
                   link = 'https://youtu.be/iuDWFGJHluw'
                   />
                  <Boxes 
                   ProjectName = "LEBRON JAMES"
                   image= '/2.jpg'
                   link = 'https://youtu.be/kQIzxQt-csI'
                   />
                  <Boxes 
                   ProjectName = "STEPHEN CURRY SPEND HIS MILLIONS"
                   image= '/2.jpg'
                   link = 'https://youtu.be/--crKZ7wQb4'
                   />
                  <Boxes 
                   ProjectName = "HUMILATED MOMENTS IN NBA"
                   image= '/2.jpg'
                   link = 'https://youtu.be/-gXVoOrpICs'
                   />
                  <Boxes 
                   ProjectName = "STEPH CURRY SPEND MILLIONS"
                   image= '/2.jpg'
                   link = 'https://youtu.be/-lzu3275ncU'
                   />
                  <Boxes 
                   ProjectName = "SHAQ DISRESPECTED NBA PLAYERS"
                   image= '/2.jpg'
                   link = 'https://youtu.be/uvtZGMEqrCs'
                   />
                  <Boxes 
                   ProjectName = "NBA PLAYER FORCE RULE CHANGE"
                   image= '/2.jpg'
                   link = 'https://youtu.be/U7MvotkWvn8'
                   />
                  <Boxes 
                   ProjectName = "CHARACTER INTRO"
                   image= '/2.jpg'
                   link = 'https://youtu.be/jqNloRyXXYg'
                   />
                  <Boxes 
                   ProjectName = "10 MOST EXPENSIVE CARS"
                   image= '/2.jpg'
                   link = 'https://youtu.be/Ifsdtn2jsPg'
                   />
                  <Boxes 
                   ProjectName = "SCP 542"
                   image= '/2.jpg'
                   link = 'https://youtu.be/5G3MDhENfvc'
                   />
                  <Boxes 
                   ProjectName = "BOY WAS STUCKED FOR 24 HOURS"
                   image= '/2.jpg'
                   link = 'https://youtu.be/aGkqoU5x0hM'
                   />
                  <Boxes 
                   ProjectName = "VOICE OVER + SUBTITLES"
                   image= '/2.jpg'
                   link = 'https://youtu.be/crEVyLrBeys'
                   />
                  <Boxes 
                   ProjectName = "10 MOST EXPENSIVE CARS"
                   image= '/2.jpg'
                   link = 'https://youtu.be/Ifsdtn2jsPg'
                   />
                  <Boxes 
                   ProjectName = "10 MOST EXPENSIVE CARS"
                   image= '/2.jpg'
                   link = 'https://youtu.be/Ifsdtn2jsPg'
                   />
                  <Boxes 
                   ProjectName = "10 MOST EXPENSIVE CARS"
                   image= '/2.jpg'
                   link = 'https://youtu.be/Ifsdtn2jsPg'
                   />
            
             </div>
            </div>
        </div>
    </>
  )
}

export default Long