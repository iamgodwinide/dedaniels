import React from 'react'
import styles from './hero.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id='home' className={`${styles.hero} flex`}>
        <div className={`${styles.contentLeft} w-full lg:w-2/5`}>
            <Image 
                src={'/pattern-1.png'}
                alt='patterns'
                width={120}
                height={120}
                className='absolute -top-10 left-0 md:hidden'
            />
            <h1  className={`${styles.title} font-bold text-4xl md:text-6xl text-gray-800 md:mt-10`}>Experience <br /> Comfort <br /> and Elegance</h1>
            <p className='text-xl text-gray-800 my-10'>
            Discover a perfect blend of luxury and comfort in every corner of our hotel. Indulge in exquisite services, where elegance meets tranquility, creating unforgettable stays.
            </p>
            <Link href="tel:+2348064556174" className='btn text-xl w-full md:w-48 my-5 rounded text-white hover:bg-orange-800 duration-300'>BOOK ROOM</Link>
        </div>
        <div className={`${styles.contentRight} w-0 lg:w-3/5`}>

        </div>
    </div>
  )
}

export default Hero