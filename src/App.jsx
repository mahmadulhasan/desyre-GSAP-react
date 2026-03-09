import React from 'react'
import Hero from './component/Hero'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SecondSec from './component/SecondSec'
import Scrollsection from './component/Scrollsection'

const App = () => {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {

    gsap.fromTo('#desyre',
      {
        fontSize: '20vw',
        y: "50vh"
      },
      {
        fontSize:'2vw',
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: '#main',
          start: 'top top',
          end: '+=700',
          scrub: true, 
        }
      }
    )

  })

  return (
    <main className="relative" id='main'>

      <span
        id='desyre'
        className="fixed text-white m-0 top-0  left-[25px] md:left-[50px] lg:left-[100px] z-[999] font-bold mix-blend-difference inter text-[clamp(2rem,3vw,3rem)]"
      >
        DESYRE
      </span>

      <Hero />
      <SecondSec />
      <Scrollsection />

      <div className="h-screen bg-white"></div>

    </main>
  )
}

export default App