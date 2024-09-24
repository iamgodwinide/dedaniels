import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='flex flex-col md:flex-row px-10 mt-10 md:mt-28'>
        <div className="w-full md:w-1/2 overflow-hidden">
            <img
                src={"/bg2.jpg"}
                width={100}
                height={100}
                className='w-full h-full duration-500 hover:scale-105'
            />
        </div>
        <div className="flex flex-col md:justify-center w-full md:w-1/2 md:px-20">
            <h3 className='uppercase text-orange-600 font-sans font-medium md:mt-0 mt-10'>about de daniels hotels</h3>
            <h3 className='text-black text-3xl md:text-6xl my-5 font-bold'>
                Luxury
                Hotel in The Heart of
                Benin City.
            </h3>
            <p className='font-sans text-black'>At De Daniels Hotels, we provide an exceptional experience that embodies luxury and comfort in the vibrant heart of Benin City. Our hotel is designed to offer a serene and elegant atmosphere for both business and leisure travelers. With world-class amenities and personalized services, we ensure that your stay is as memorable as it is relaxing. Whether you&apos;re here for business or pleasure, De Daniels Hotels is your gateway to an extraordinary experience of elegance and hospitality.</p>
            <Link href="#about" className='uppercase btn font-sans text-md w-full md:w-48 my-10 rounded bg-transparent text-gray-800 hover:text-white hover:bg-orange-800 duration-300'>discover more</Link>
        </div>
    </div>
  )
}

export default About