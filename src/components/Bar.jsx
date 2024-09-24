"use client"
import React, { useState } from 'react'
import './bar.css'

const Bar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div id='bar' className={`flex flex-col md:flex-row px-10 mt-20 md:mt-28`}>
        <div className="w-full md:w-1/2 overflow-hidden">
            <img
                src={"/bar3.jpg"}
                width={100}
                height={100}
                className='w-full h-full duration-500 hover:scale-105'
            />
        </div>
        <div className="flex flex-col md:justify-center w-full md:w-1/2 md:px-20">
            <h3 className='text-black text-3xl md:text-6xl my-2 font-bold'>
                Bar Overview
            </h3>
            <p className='font-sans text-black'>Unwind and socialize in our stylish bar, where a curated selection of fine wines, signature cocktails, and premium spirits awaits. Whether you&apos;re looking to relax after a long day or enjoy an evening with friends, our bar offers the perfect ambiance for any occasion.</p>
            <h4 className='text-lg text-orange-700 mt-10 font-bold'>Opening Hours: 24/7</h4>
            {/* <button onClick={()=> setOpen(true)} className='uppercase btn font-sans text-md w-full md:w-48 my-10 rounded bg-transparent text-gray-800 hover:text-white hover:bg-orange-800 duration-300'>Open Menu</button> */}
        </div>

        <div className={`fixed hidden flex-col justify-center items-center top-0 left-0 w-screen h-screen z-50 ${open && 'show-menu'}`}>
            <div className="bg-black opacity-50 absolute top-0 left-0 w-full h-full" onClick={()=> setOpen(false)}></div>
            <div className="flex">
                <button onClick={()=> setOpen(false)} className='flex outline rounded p-2 items-center capitalize text-white text-4xl absolute right-5 top-5 z-50'>
                        <span className="text-xl font-sans">
                            close menu
                        </span>
                        <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>
            <div className={`flex justify-center items-center w-full md:p-5 relative duration-500 overflow-scroll ${open && 'show-menu-image'}`}>
                <img
                    src={"/menu.png"}
                    height={100}
                    width={100}
                    className='w-3/4 lg:hidden'
                    onClick={()=> {}}
                />
                <img
                    src={"/menu-desktop.png"}
                    height={100}
                    width={100}
                    className='w-3/4 h-3/4 hidden lg:block'
                    onClick={()=> {}}
                />
            </div>
        </div>
    </div>
  )
}

export default Bar