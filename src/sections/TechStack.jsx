import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'
import TechIcon from '../components/TechIcon'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const TechStack = () => {

    useGSAP(() => {
        gsap.fromTo('.tech-card', { y: 70, opacity: 0}, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top center',
            }
        })
    })

    return (
        <div id='skills' className='flex-center section-padding'>
            <div className='w-full h-full md:px-10 px-5'>
                <TitleHeader
                    title="My Technical Skills"
                    sub="🤹🏻‍♀️ The Skills I Bring to The Table"
                />

                <div className='tech-grid'>
                    {techStackIcons.map((icon) => (
                        <div key={icon.name} className='card-border tech-card overflow-hidden group x:rounded-full rounded-lg'>
                            <div className='tech-card-content'>
                                <div className='tech-icon-wrapper'>
                                    <img src={icon.imgPath}/>
                                    {icon.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack