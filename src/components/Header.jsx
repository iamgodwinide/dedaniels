import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'


const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/#about'
    },
    {
        name: "Rooms",
        path: '/#rooms'
    },
    {
        name: "Bar",
        path: '/#bar'
    },
    {
        name: "Contact Us",
        path: '/#contact'
    },
    
]

const Header = () => {
  return (
    <nav className='relative bg-white shadow z-50'>    
    {/* DESKTOP NAV */}
    <div className='hidden lg:flex  justify-center items-center py-10 px-10'>
        <Link href="/" className='flex justify-start items-start w-3/12  hover:text-orange-700'>
            <Image src="/logo.png" alt="De Daniels Hotel and Suites" width={100} height={50} />
        </Link>
        <ul  className='bg-white relative flex justify-end items-center px-10 w-9/12 '>
            {
                links.map((link, key) =>(
                <li className='my-0' key={key}>
                    <Link href={link.path} className=' text-xl text-gray-800 mr-4 hover:text-orange-700'>{link.name}</Link>
                </li>
                ))
            }
            <li>
                <Link href="tel:+2348064556174" className='btn btn-outline rounded outline-orange-700  text-xl text-gray-800 mr-4 hover:text-white hover:bg-orange-800 duration-500'>
                    Book Your Stay
                </Link>
            </li>
        </ul>
    </div>
    <MobileMenu links={links}/>
    </nav>
  )
}

export default Header