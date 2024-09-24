"use client"
import React, { useEffect, useState } from 'react'
import './header.css'
import Link from 'next/link'
import Image from 'next/image'


const MobileMenu = ({links}) => {
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState()

    useEffect(()=> {
        setMounted(true)
    }, [])

    return !mounted
    ?<></>
    :(
    <>
    {/* MOBILE NAV */}
    <div className="w-full flex justify-between items-center px-10 py-4 shadow lg:hidden">
        <Link href="/" className='flex w-1/2 justify-start items-center  hover:text-orange-700'>
            <Image src="/logo.png" alt="De Daniels Hotel and Suites" width={70} height={40} />
        </Link>
        <button className='text-5xl' onClick={()=> setOpen(true)}>
            <ion-icon name="menu-outline"></ion-icon>
        </button>
    </div>
    <div className={`fixed h-screen w-screen top-0 flex lg:hidden mobile-menu ${open && 'show-mobile-menu'}`}>
        <div className='w-1/4 bg-orange-900 opacity-20' onClick={()=> setOpen(false)}></div>
        <div className='w-full relative flex flex-col bg-gray-800 p-10'>
            <div className="flex justify-between">
                <Link href="/" className='flex w-1/2 justify-start items-center'>
                    <Image src="/logo-white.png" alt="De Daniels Hotel and Suites" width={80} height={50} />
                </Link>
                <button className='text-white text-4xl' onClick={()=> setOpen(false)}>
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>
            <ul>
                    <div className="divider"></div>
                    {
                        links.map((link, key) => (
                            <li key={key}>
                                <Link href={link.path} className='text-2xl fontt-bold text-white flex justify-between items-center'>
                                    <span>{link.name}</span>
                                    <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                                </Link>
                                <div className="divider"></div>
                            </li>
                        ))
                    }
            </ul>
            <Link href="tel:+2348064556174" className='btn btn-outline bg-white rounded outline-orange-700 font-extrabold text-xl text-gray-600 mr-4 hover:text-white hover:bg-orange-700 duration-500'>
                    Book Your Stay
            </Link>
        </div>
    </div>
    </>
  )
}

export default MobileMenu