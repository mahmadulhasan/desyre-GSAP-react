import React from 'react'

const Hero = () => {

    const data=[
        {
            title:"hi i'm mahmadul",
            image: '/public/heroimg1.webp'
        },
        {
            title:"Web Engineer",
            image: '/public/heroimg2.webp'
        },
        {
            title:"brand voice",
            image: '/public/heroimg3.webp'
        },
        {
            title:"empower code",
            image: '/public/heroimg4.webp'
        },
    ]

  return (
    <section id='hero' className="h-[200vh] bg-[url('/public/heroimg.webp')] bg-center bg-cover p-[25px] md:p-[50px] lg:p-[100px]">

        <div className="h-[100vh] flex items-center mb-15">
            <span className="text-[clamp(2rem,4vw,5rem)] font-bold uppercase text-white mix-blend-difference">web Engineer</span>
        </div>

        <div className="h-screen flex flex-col items-center gap-0">
            {data.map((item, index)=>(
                <div className="group relative w-full px-10 py-2  border-b border-b-white hover:bg-white hover:text-black text-white transform transition-all duration-500 ease-in-out" key={index}>
                    <img src={item.image} alt="" className="absolute w-0 group-hover:w-fit h-[150%] -top-[25%] left-0 transform transition-all duration-500 ease-in-out" />
                    <span className=" text-[4vw] font-semibold uppercase group-hover:pl-[150px] transform transition-all duration-500 ease-in-out">{item.title}</span>
                </div>
            ))}
        </div>
      
    </section>
  )
}

export default Hero
