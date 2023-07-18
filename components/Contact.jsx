import Link from 'next/link'
import React from 'react'
 

const Contact = () => {
  return (
    <>  
        <div id='contact' className='contact flex flex-col items-center '>
            <div className='new_bg flex flex-col items-center justify-center gap-5 pt-14 '>
                <h1 className=' text-white font-bold text-7xl'>THE<span className='render'> 3-STEP </span>CONTACT</h1>
                <h1 className='editor pb-14'>SAY HELLO TO ME ------</h1>
            </div>
            <div className='contact_row flex flex-row pt-14'>
                <div className='flex justify-center items-center  gap-4' >
                    <div className='flex flex-col '>
                        <h1 className='contact_head'>CONTACT</h1>
                        <h1 className='num'>1</h1>
                    </div>
                    <h1 className='para'>Choose Any Platform Which You Use For Contacting Me.</h1>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <div>
                        <h1 className='contact_head'>MESSGAE</h1>
                        <h1 className='num'>2</h1>
                    </div>
                    <h1 className='para'>You Can Message Me & We Will Talk About The Project.</h1>
                </div>
                <div className='flex justify-center items-center  gap-4 '>
                    <div>
                        <h1 className='contact_head'>ENJOY</h1>
                        <h1 className='num'>3</h1>
                    </div>
                    <h1 className='para '>You Will Be Delievered With The High Quality Final Product.</h1>
                </div>
            </div>
            <Link href='/Contact_btn'>
            <div className='new_btn flex justify-center items-center btn pb-14'>
                <button className='work_btn '>
                    CONTACT
                </button>
             </div>
            </Link>
        </div>
    </>
  )
}

export default Contact