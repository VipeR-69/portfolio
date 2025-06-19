import { useRef } from "react"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  

  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
    projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y: 50, opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.1 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100'
                }
            },
        )
    })
    gsap.fromTo(sectionRef.current, { opacity: 0}, { opacity: 1, duration: 1.5 })
  }, [])

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
            <div className='w-full h-full md:px-20 px-5 mb-13'>
                <TitleHeader title='My Projects' sub="💼 What Have I Created" />
            </div>
            <div className="showcaselayout">
                {/* LEFT */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img className="rounded-2xl" src="/images/findrr-project.png" alt="Findrr" />
                    </div>
                    <div className="text-content">
                        <h2>Job Hunt Made Simple with a User-Friendly App called Findrr</h2>
                        <p className="text-white-50 md:text-xl">
                            An app built with JavaScript, React, TailwindCSS, Supabase, Shadcn UI and Clerk for a fast, secure and user-friendly experience.
                        </p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper bg-[#ffefeb]">
                            <img src="/images/project2.png" alt="Library Management Platform" />
                        </div>
                        <h2>Library Management Platform</h2>
                    </div>
                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <img src="/images/project3.png" alt="YC Directory" />
                        </div>
                        <h2>YC Directory - A Startup Showcase App</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection