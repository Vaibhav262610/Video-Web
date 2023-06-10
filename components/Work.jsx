import Link from 'next/link'
import React from 'react'
import Boxes from './Boxes'
 

const Work = () => {
  return (
    <>
        <div className='work flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col gap-6 items-center'>
                    <h1 className='work_head  text-white font-bold text-7xl'>THE <span className='render'>RENDERS</span></h1>
                    <h1 className='work_sub text-lg'>BY ALL MEANS, CHOOSE YOUR STYLE ------</h1>
                </div>
                <div className='boxes grid grid-rows-3 sm:grid-rows-3 grid-flow-row gap-14 sm:grid-flow-col'>
                 <Boxes 
                  ProjectName = "METRACK TEASER"
                  image = '/2.jpg'
                  link = 'https://replit-clone.netlify.app/'
                 />
                 <Boxes 
                  ProjectName = "TOKA"
                  image= '/2.jpg'
                  link = 'https://toka-vr.vercel.app/'
                />
                  <Boxes 
                   ProjectName = "ADDIDAS-CLONE"
                   image= '/2.jpg'
                   link = 'https://adidas-clone-indol.vercel.app/'
                 />
                 <Boxes 
                  ProjectName = "AGENCY"
                  image= '/2.jpg'
                  link = 'https://agency-website-vr.vercel.app/'
                />
                 <Boxes 
                  ProjectName = "ISRO-CLONE"
                  image= '/2.jpg'
                  link = 'https://isro-clone-redesign.vercel.app/'
                  />
                  <Boxes 
                   ProjectName = "WEATHER-APP"
                   image= '/2.jpg'
                   link = 'https://weather-app-six-black.vercel.app/'
                   />
            
             </div>
             <div className='btn pb-14'>
                <button className='work_btn '>
                    VIEW MORE
                </button>
             </div>
            </div>
        </div>
    </>
  )
}

export default Work