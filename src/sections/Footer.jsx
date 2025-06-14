import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='flex flex-col justify-center md:items-start items-center'>
                    Ghanshyam Gautam .
                </div>

                <div className='socials'>
                    {socialImgs.map((img) => (
                        <a target="_blank" href={img.url} key={img.url}>
                            <img src={img.imgPath} className='cursor-pointer'/>
                        </a>
                    ))}
                </div>

                <div className='flex flex-col justify-center'>
                    <p className='text-center md:text-end'>
                        © {new Date().getFullYear()}, All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer