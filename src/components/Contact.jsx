import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='flex justify-center items-center gap-5 p-10'>
        <div className='w-full md:w-1/2'>
            <div className="md:w-3/4">
                <h4 className='text-orange-700 font-sans uppercase'>contact us</h4>
                <h3 className='text-xl md:text-3xl font-bold text-gray-800 my-2'>
                    If You Wish To
                    Learn More Ask Before
                    Booking.
                </h3>
                <div className="divider"></div>
                <p className='text-black text-xl font-bold md:text-xl'>
                    Call Line:
                </p>
                <ul>
                    <li className='text-gray-800 text-xl mb-2'><a href="tel:+2348064556174">+2348064556174</a></li>
                    <li className='text-gray-800 text-xl'><a href="tel:+2349051285239">+2349051285239</a></li>
                </ul>
                <div className="divider"></div>
                <p className='text-black text-xl font-bold md:text-xl'>
                    Address:
                </p>
                <p className='text-gray-800 text-xl'>
                    1 Starman Close, off Ohogbobi community, off sapele road, Ikpoba Okha, Benin 300105, Edo, Nigeria
                </p>
            </div>
        </div>
        <div className='hidden md:flex w-1/3'>
            <img 
                src="/support.jpg"
                alt="support"
                width={100}
                height={100} 
                className='w-full'
            />
        </div>
    </div>
  )
}

export default Contact