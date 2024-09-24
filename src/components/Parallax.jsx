import React from 'react'
import styles from './parallax.module.css'
import Link from 'next/link'

const Parallax = () => {
  return (
    <div className={`${styles.parallax} mt-10 flex justify-center items-center relative`}>
        <div className="bg-black opacity-50 absolute top-0 left-0 w-full h-full"></div>
       <div className='relative flex flex-col items-center md:max-w-3xl px-10'>
            <h2 className='text-xl md:text-4xl text-white text-center font-bold'>At De Daniels Hotels, every detail is carefully curated to provide you with an unforgettable stay.</h2>
            <Link href="tel:+2348064556174" className='uppercase btn font-sans text-md w-full md:w-48 my-10 rounded bg-orange-600 text-white hover:text-white hover:bg-orange-800 duration-300'>Check Availability</Link>
       </div>
    </div>
  )
}

export default Parallax