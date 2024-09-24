import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row gap-10 p-10 bg-gray-950'>
      <div className='w-full md:w-1/3'>
        <h4 className='text-white text-2xl font-bold my-4'>Contact Us</h4>
        <div className="divider"></div>
        <ul>
          <li className='text-white text-base my-4'>
            <span className="font-bold">Address</span>: 1 Starman Close, off Ohogbobi community, off sapele road, Ikpoba Okha, Benin 300105, Edo, Nigeria
          </li>
          <li className='text-white text-base my-4'>
            <span className="font-bold">Email</span>: <a href='mailto:info@dedanielshotel.com'>info@dedanielshotel.com</a>
          </li>
        </ul>
        <ul>
            <li className='text-white text-base my-4 font-bold'>Call line 1: <a href="tel:+2348064556174" className='font-normal'>+2348064556174</a></li>
            <li className='text-white text-base my-4 font-bold'>Call line 2: <a href="tel:+2349051285239" className='font-normal'>+2349051285239</a></li>
        </ul>
      </div>

      <div className='w-full md:w-1/3'>
        <h4 className='text-white text-2xl font-bold my-4'>Links</h4>
        <div className="divider"></div>
        <ul>
            <li className='text-white text-base my-4'><a href="/#about">About Us</a></li>
            <li className='text-white text-base my-4'><a href="/#bar">Bar</a></li>
            <li className='text-white text-base my-4'><a href="/#contact">Contact Us</a></li>
        </ul>
      </div>

      <div className='w-full md:w-1/3'>
        <h4 className='text-white text-2xl font-bold my-4'>Opening Hours</h4>
        <div className="divider"></div>
        <ul>
            <li className='text-white text-base my-4'>Mon - 24 hours</li>
            <li className='text-white text-base my-4'>Tue - 24 hours</li>
            <li className='text-white text-base my-4'>Wed - 24 hours</li>
            <li className='text-white text-base my-4'>Thu - 24 hours</li>
            <li className='text-white text-base my-4'>Fri - 24 hours</li>
        </ul>
      </div>

    </div>
  )
}

export default Footer