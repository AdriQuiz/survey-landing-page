import React from 'react'
import people_talking from "../assets/people_talking.png"
import flower from "../assets/flower.png"

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center bg-gradient-to-b from-color-2 to-color-3 h-[200px]'>
        <div className='flex items-center mb-5'>
            <img src={flower} alt="" height={50} width={50} />
            <h1 className='text-3xl font-bold font-sora'>AskNicely</h1>
        </div>
          <small className='inline-block text-gray-500 font-bold'>&copy;AskNicely. All Rights Reserved | Privacy Policy</small>
    </div>
  )
}

export default Footer