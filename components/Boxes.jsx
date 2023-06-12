import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import hero from '../Components/Img/chrome_mIA100o9RG.png'


const Boxes = ({ProjectName , image , link}) => {
  return (
    <>
    <div className='boxes'>
        <div className='box flex flex-col justify-center items-center gap-6 border-2 rounded-3xl p-2 '>
            <div>
            <a href={link} className='overlay flex justify-center items-center hover:animate-pulse' target='__blank' >
              <Image className='images cursor-default border-0 rounded-3xl ' src={image}objectFit='contain' alt='Not Available' width={750} height={750} />
              <h1 className='over_text text-4xl text-white'>PREVIEW</h1>
            </a>
            </div>
            <div>
                <h1 className='title text-lg pb-2'>{ProjectName}</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default Boxes