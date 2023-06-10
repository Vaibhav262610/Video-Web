import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <div className='header flex justify-center items-center flex-col  '>
        <div>
          <h1 className='video-editor-heading text-lg'>VIDEO EDITOR</h1>
        </div>
        <div>
          <h1 className='video-editor-name text-9xl'>VAIBHAV RAJPOOT</h1>
        </div>
        <div>
          <div className='circle'>
            <h1 className='video-editor-demo text-lg'>RENDERS</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header