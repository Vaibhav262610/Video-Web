import Link from 'next/link'
import React from 'react'

const Experience = () => {
  return (
    <>
    <div id='about' className='about flex flex-col justify-around items-center'>
      <div className='w-10/12 flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center flex-col gap-4'>
            <h1 className='about_me text-8xl  font-bold'>ABOUT ME</h1>
            <h1 className='editor'>A VIDEO EDITOR  ------ </h1>
        </div>
            <h2 className='about_editor text-sm'>
           Passionate video editor skilled in creating captivating visual narratives through meticulous editing techniques. Experienced in various editing software and committed to delivering high-quality content that exceeds client expectations.

</h2>
        </div>
         
        <div className='flex flex-col justify-center items-center'>
            <h1 className='exp text-xl'>EXPERIENCE</h1>
            <h1 className='ten '>3+</h1>
            <h1 className='years text-xl'>YEARS</h1>
        </div>
      </div>
    
    </>
  )
}

export default Experience