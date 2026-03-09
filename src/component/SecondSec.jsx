import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'

const SecondSec = () => {

  const sections = [
    {
      id: "01",
      title: "PRACTICAL",
      description:
        "Models must solve real needs, not just benchmarks. Every line of code should serve people, products, and progress, not vanity metrics.",
      image: "/public/heroimg1.webp"
    },
    {
      id: "02",
      title: "STRUCTURE",
      description:
        "Good ideas fall apart without structure. Clear process, clean pipelines, and scalable systems turn creativity into something that actually works.",
      image: "/public/structure.webp"
    },
    {
      id: "03",
      title: "ADAPTIVE",
      description:
        "Technology changes fast, so solutions must bend, not break. Adaptability means staying useful tomorrow, not just impressive today.",
      image: "/public/adaptive.webp"
    },
    {
      id: "04",
      title: "IMPACTFUL",
      description:
        "Code is only as good as the difference it makes. Every build should improve accuracy, speed, or experience, because results are what truly matter.",
      image: "/public/impactful.webp"
    }
  ];

  useGSAP(() => {

    const split = (selector) => {
      const el = document.querySelector(selector)
      const text = el.textContent
      el.innerHTML = text
        .split("")
        .map(letter => `<span class="char">${letter}</span>`)
        .join("")
    }

    split("#text1")
    split("#text2")

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })

    tl.from("#text1 .char", {
      y: -120,
      opacity: 0,
      stagger: 0.05,
      duration: 0.5
    })

    tl.to("#text1 .char", {
      y: -120,
      opacity: 0,
      stagger: 0.05,
      duration: 0.4
    })

    tl.from("#text2 .char", {
      y: 120,
      opacity: 0,
      stagger: 0.05,
      duration: 0.5
    })

    tl.to("#text2 .char", {
      y: 120,
      opacity: 0,
      stagger: 0.05,
      duration: 0.4
    })

  })

  const [expanded, setExpanded] = useState(null);

  const toggle = (idx) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <section className='flex-1 bg-black p-[25px] md:p-[50px] lg:p-[100px] min-h-screen gap-5'>

      <span className="text-2xl text-white font-bold uppercase">
        THIS, HOW I DEVELOP.
      </span>

      <div className="flex flex-col text-8xl text-white font-bold ">
        <span id='text1'>WHY IT MATTERS</span>
        <span id='text2'>BUILT FOR YOU</span>
      </div>


      <div className="w-full flex flex-col gap-2 items-end">

        {sections.map((item) => (
          <div key={item.id} className="border-b py-10 border-b border-b-gray-400">
            <div onClick={() => toggle(item.id)} className="flex gap-2 h-[60px] relative items-end flex justify-between">
              <span className="text-white text-xl absolute top-0 left-0">/{item.id}</span>
              <h2 className="text-3xl  font-bold text-white pl-10">{item.title}</h2>

              <ChevronDown className='text-gray-400 text-xl' />

            </div>


            <div className="flex gap-10 mt-4 overflow-hidden transition-all duration-500 ease-in-out" style={{ maxHeight: expanded === item.id ? "400px" : "0px" }}>
              <img src={item.image} alt={item.title} className="w-[200px]" />

              <p className="max-w-[500px] text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default SecondSec