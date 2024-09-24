import About from '@/components/About'
import Bar from '@/components/Bar'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Parallax from '@/components/Parallax'
import Rooms from '@/components/Rooms'
import React from 'react'

const homePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Rooms />
      <Bar />
      <Parallax />
      <Contact />
    </>
  )
}

export default homePage