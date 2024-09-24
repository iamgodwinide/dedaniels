import React from 'react'
import Link from 'next/link'

const RoomCard = ({name, price, desc, img}) => {
  return (
    <div className="relative flex flex-col w-full md:w-1/3 bg-white shadow-2xl rounded overflow-hidden">
        <div className="flex overflow-hidden h-52 md:h-60">
            <img
                src={img}
                alt='Regluar Rooms'
                width={200}
                height={200}
                className='w-full duration-500 hover:scale-125'
            />
        </div>
        <div className="mt-5 p-5 relative">
            <div className="absolute -top-10 bg-white shadow-xl rounded-full flex items-center justify-center h-12 px-10"
            style={{
                width: "80%",
                transform: "translateX(5%)"
            }}
            >
                <h4 className='text-xs md:text-sm text-gray-800 font-sans'>
                    Starting from <span className='text-orange-800'>NGN{price}</span>/night
                </h4>
            </div>
            <div className="rating rating-sm my-4">
                <input type="radio" className="mx-1 mask mask-star-2 bg-yellow-400" />
                <input
                    type="radio"
                    name="rating-2"
                    className="mx-1 mask mask-star-2 bg-yellow-400"
                />
                <input type="radio" name="rating-2" className="mx-1 mask mask-star-2 bg-yellow-400" />
                <input type="radio" name="rating-2" className="mx-1 mask mask-star-2 bg-yellow-400" />
                <input type="radio" name="rating-2" className="mx-1 mask mask-star-2 bg-yellow-400" />
            </div>
            <h3 className='text-2xl  text-gray-800 font-bold'>{name}</h3>
            <p className='text-base my-5 text-gray-700'>
                {desc}
            </p>
            <Link href="tel:+2348064556174" className='btn font-sans text-md w-full md:w-48 my-10 rounded bg-transparent text-gray-800 hover:text-white hover:bg-orange-800 duration-300'>BOOK NOW</Link>
        </div>
    </div>
  )
}

export default RoomCard