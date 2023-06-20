import Link from 'next/link'
import React from 'react'
import Boxes from './Boxes'
 

const Work = () => {
  return (
    <>
        <div className='work  flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex  flex-col gap-6 items-center'>
                    <h1 className='work_head  text-white font-bold text-7xl'>THE <span className='render'>RENDERS</span></h1>
                    <h1 className='work_sub text-lg'>BY ALL MEANS, CHOOSE YOUR STYLE ------</h1>
                </div>
                <div className='boxes gap-14 sm:flex-row flex-col'>
                 <Boxes 
                  ProjectName = "METRACK TEASER"
                  image = '/2.jpg'
                  link = 'https://youtu.be/KaPjkj5WAaI'
                 />
                 <Boxes 
                   ProjectName = "SCP 542"
                   image= '/2.jpg'
                   link = 'https://youtu.be/5G3MDhENfvc'
                 />
                <Boxes 
                  ProjectName = "SHORTS/REELS"
                  image= '/2.jpg'
                  link = 'https://youtube.com/shorts/MhE23ESOXVE?feature=share'
                  />
                  
                 <Boxes 
                  ProjectName = "MICHAEL JORDAN"
                  image= '/2.jpg'
                  link = 'https://youtu.be/_nlhs-dI5jg'
                />
                 <Boxes 
                  ProjectName = "STEPHEN CURRY"
                  image= '/2.jpg'
                  link = 'https://youtu.be/0ZcjzoiKEiU'
                />
                 
                  <Boxes 
                   ProjectName = "SHORTS/REELS"
                   image= '/2.jpg'
                   link = 'https://youtube.com/shorts/WgnyJ31KGnw?feature=share'
                   />
            
             </div>
             <div className='btn pb-14'>
              <Link href='/Videos'>
                <button className='work_btn '>
                    VIEW MORE
                </button>
              </Link>
             </div>
            </div>
        </div>
    </>
  )
}

export default Work