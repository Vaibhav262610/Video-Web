import Link from 'next/link'
import React from 'react'
 

const Contact_btn = () => {
  return (
    <>
        <div id='contact' className='contact flex flex-col items-center '>
            <div className='new_bg flex flex-col items-center justify-center gap-5 pt-14 '>
                <h1 className=' text-white font-bold text-7xl'><span className='render'> CONTACT </span>NOW</h1>
                <h1 className='editor pb-14'>SAY HELLO TO ME ------</h1>
            </div>
            <iframe src="https://giphy.com/embed/fVIuhlMGYANwHq7j9g" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/TOEIAnimationUK-one-piece-luffy-fVIuhlMGYANwHq7j9g">via GIPHY</a></p>
        <h1 className='editor pb-14 text-xl font-bold text-white '>------- NOT READY YET ------</h1>
        </div>
    </>
  )
}

export default Contact_btn