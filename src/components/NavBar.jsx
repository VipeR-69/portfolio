import { useEffect, useState } from 'react';
import { navLinks } from '../constants';

const NavBar = () => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 10);

            if (currentScrollY < lastScrollY || currentScrollY <= 50) {
                setVisible(true);
            } else {
                setVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        const handleMouseMove = (e) => {
            if (e.clientY <= 50) {
                setVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'} transition-transform duration-300 fixed  w-full z-50 ${
                visible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className='inner'>
                <a className='logo' href='#hero'>
                    Ghanshyam | Gautam
                </a>

                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className='group'>
                                <a
                                href={link}
                                {...(link.startsWith('http')
                                    ? { target: '_blank', rel: 'noopener noreferrer' }
                                    : {})}
                                >
                                <span>{name}</span>
                                <span className='underline' />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href='#contact' className='contact-btn'>
                    <div className='inner'>
                        <span>Contact Me</span>
                    </div>
                </a>
            </div>
        </header>
    );
};

export default NavBar;
