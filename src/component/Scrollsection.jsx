import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'

const Scrollsection = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        const tl = gsap.timeline({

            scrollTrigger: {
                trigger: ".gallery_box",
                start: "top center-=200px",
                end: "bottom+=3000px center-=200px",
                scrub: true,
                pin: true,
            }
        });

        tl.to('.gallery_box_outer', {
            duration: 10,
            rotateY: 360,
            rotateX: 30,
            ease: "none",
        });
    })
    return (
        <section className="work2 relative mt-[25vh] mb-[400vh] ">
            
            <div className="gallery_box ">
                <div class="gallery_box_outer">
                    <div className="gallery_box_in flex item-center" style={{ background: 'black', }}>
                        <img src="/public/project1.jpg" alt="" />
                    </div>
                    <div className="gallery_box_in flex item-center" style={{ background: 'black', }}>
                        <img src="/public/project2.jpg" alt="" />
                    </div>
                    <div className="gallery_box_in flex item-center" style={{ background: 'black', }}>
                        <img src="/public/project3.png" alt="" />
                    </div>
                    <div className="gallery_box_in flex item-center" style={{ background: 'black', }}>
                        <img src="/public/project1.jpg" alt="" />
                    </div>
                    <div className="gallery_box_in flex item-center" style={{ background: 'black', }}>
                        <img src="/public/project2.jpg" alt="" />
                    </div>
                    <div className="gallery_box_in flex item-center" style={{ background: 'black', }}>
                        <img src="/public/project3.png" alt="" />
                    </div>
                    <div className="gallery_box_in flex item-center" style={{ background: 'black', }}>
                        <img src="/public/project1.jpg" alt="" />
                    </div>
                    <div className="gallery_box_in flex item-center" style={{ background: 'black', }}>
                        <img src="/public/project2.jpg" alt="" />
                    </div>
                    <div className="gallery_box_in flex item-center" style={{ background: 'black', }}>
                        <img src="/public/project3.png" alt="" />
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Scrollsection
