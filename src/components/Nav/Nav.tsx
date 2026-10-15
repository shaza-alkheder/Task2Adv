import { HiMenuAlt3, HiX } from 'react-icons/hi'
import './Nav.css'
import { useState } from 'react';
import type { NavItem } from '../../interfaces';
const Nav = () => {
    const navItems: NavItem[] = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '#about' },
        { label: 'Academics', href: '#academics' },
        { label: 'Admissions', href: '#admissions' },
        { label: 'Student Life', href: '#student-life' },
        { label: 'Contact', href: '#contact' },
    ];
    // const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const [isMenu, setIsMenu] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>('/');

    const toggleMenu = (): void => {
        setIsMenu((prev) => !prev)
    }
    const closeMenu = (): void => {
        setIsMenu(false)
    }
    const clickLink = (href: string): void => {
        setActiveLink(href);
        closeMenu();
    };

    return (
        <>
            <nav>
                <div className='logo'>
                    <img src="/assets/img/Logo.png" alt="" />
                </div>
                <ul className={`navLinks ${isMenu ? 'navLinksMenu' : ''}`}>
                    {
                        navItems.map((navItem, index) => (
                            <li key={index} className={activeLink === navItem.href ? 'active' : ''} onClick={() => clickLink(navItem.href)}>
                                <a href={navItem.href}>{navItem.label}</a>
                            </li>
                        ))
                    }
                </ul>
                <button className='menuBtn' onClick={toggleMenu} aria-label="Toggle navigation menu" aria-expanded={isMenu}>
                    {isMenu ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </nav>
        </>
    )
}

export default Nav
