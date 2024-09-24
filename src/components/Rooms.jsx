import React from 'react'
import RoomCard from './RoomCard'

const Rooms = () => {
  return (
    <div id='rooms' className='px-10'>
        <h2 className='mt-10 md:mt-20 uppercase font-sans text-sm md:text-md text-center text-orange-600 '>Discover</h2>
        <h2 className='font-bold text-3xl md:text-4xl text-center text-gray-800 '>Rooms & Suites</h2>
        {/* Room Card */}
        <div className="flex flex-col md:flex-row gap-10 mt-10">
            <RoomCard
                img={"/standard.jpg"}
                name={"Standard"}
                price={"30,000"}
                desc={"Our Standard Rooms offer comfort and convenience with elegant furnishings and modern amenities. Perfect for guests seeking a peaceful and restful stay."}
            />
            <RoomCard
                img={"/delux.jpg"}
                name={"Delux"}
                price={"35,000"}
                desc={"The Deluxe Rooms provide enhanced space and luxury, featuring refined decor and added conveniences for a superior experience of comfort and relaxation."}
            />
            <RoomCard
                img={"/suites.jpg"}
                name={"Suites"}
                price={"45,000"}
                desc={"Indulge in the ultimate luxury with our spacious Suites. These rooms offer premium amenities, separate living areas, and a sophisticated ambiance for an unforgettable stay."}
            />
        </div>
    </div>
  )
}

export default Rooms