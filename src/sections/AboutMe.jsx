import React from 'react'
import AnimatedCounter from '../components/AnimatedCounter'
import { MapPin } from "lucide-react"
import TitleHeader from '../components/TitleHeader'

const AboutMe = () => {
    return (
        <section className="bg-black text-white px-6 py-12 md:px-20" id="aboutme">
            {/* <h3 className="text-center text-sm tracking-wide uppercase text-gray-400">
                Get to Know Me
            </h3>
            <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-10">
                About Me
            </h2> */}
            <TitleHeader title='About Me' sub="📄 Get To Know Me" />

      <div className="flex flex-col md:flex-row gap-12 mt-10 mb-10 border-t border-gray-800 pt-10">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col items-center text-center pr-0 md:pr-10 md:border-r md:border-gray-800">
          <img
            src="/images/aboutmephoto.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border border-gray-600"
          />
          <p className="mt-6 text-gray-300 text-base leading-7 max-w-md">
            I'm, Ghanshyam Gautam, A Tech-savvy Software Engineer with a strong foundation in Programming Languages (like Java), Data Structures and Algorithms, Web Development, Cloud Services and DevOps. Passionate about problem-solving, innovation, and continuous learning, with a keen interest in building efficient and scalable solutions. Ghensi Chiyari.
          </p>
          <div className="flex items-center gap-2 mt-6 border-t border-gray-700 pt-4">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-base text-gray-400">UP, India</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 space-y-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Education</h3>
            <div className="flex justify-between text-sm text-gray-400">
              <div>
                <p className="text-white text-lg md:text-xl font-medium mt-7">KIIT University</p>
                <p className='text-base md:text-lg'>B.Tech in Computer Science and Engineering</p>
              </div>
              <div className="text-right mt-8">
                <p>2022 - 2026</p>
                {/* <p>CGPA: 7.69</p> */}
              </div>
            </div>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold">Experience</h3>
            <div className="text-sm text-gray-400">
              <div className="flex justify-between">
                <p className="text-white font-medium">Clinical AI Assistance</p>
                <p>Apr 2024 - Oct 2024</p>
              </div>
              <p className="text-white">Front-End Developer Intern</p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>Improved website performance, increasing mobile traffic by 10%</li>
                <li>Developed a mental health tracking platform, adopted by 700+ students</li>
                <li>Fixed UI bugs, reducing complaints by 50%</li>
              </ul>
              <p className="text-right mt-1">Remote</p>
            </div>
          </div> */}

          <div className="border-t border-gray-800 pt-8">
            <h3 className="text-2xl md:text-3xl font-semibold">Connect</h3>
            <div className="flex flex-wrap gap-5 mt-7">
                <a href="https://github.com/VipeR-69" target='_blank' className='rounded-lg text-white px-3 py-2 transition-colors border-1 hover:bg-zinc-800 hover:border-zinc-800'>
                    <div className='inner'>
                        <span className='flex justify-center items-center gap-1 font-semibold text-lg'>
                            <img src="/images/github.svg" className='size-7' />
                            GitHub
                        </span>
                    </div>
                </a>
                <a href="https:/linkedin.com/in/ghanshyam-gautam-dev" target='_blank' className='rounded-lg text-white px-3 py-2 transition-colors border-1 hover:bg-indigo-700 hover:border-indigo-700'>
                    <div className='inner'>
                        <span className='flex justify-center items-center gap-2 font-semibold text-lg'>
                            <img src="/images/linkedin-colored.svg" className='size-7' />
                            LinkedIn
                        </span>
                    </div>
                </a>
                <a href="https://leetcode.com/u/Cpt_VipeR" target='_blank' className='rounded-lg text-white px-3 py-2 transition-colors border-1 hover:bg-amber-700 hover:border-amber-700'>
                    <div className='inner'>
                        <span className='flex justify-center items-center gap-2 font-semibold text-lg'>
                            <img src="/images/leetcode-colored.png" className='size-7' />
                            LeetCode
                        </span>
                    </div>
                </a>
                <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:62b36f5a-1318-4a2e-aa5d-b9a20008db4e" target='_blank' className='rounded-lg text-white px-3 py-2 transition-colors border-1 hover:bg-red-700 hover:border-red-700'>
                    <div className='inner'>
                        <span className='flex justify-center items-center gap-2 font-semibold text-lg'>
                            <img src="/images/pdf.png" className='size-7' />
                            Resume
                        </span>
                    </div>
                </a>
            </div>
          </div>

        </div>
      </div>
      <AnimatedCounter />
    </section>
    )

}

export default AboutMe