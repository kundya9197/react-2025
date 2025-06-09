import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const NewNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen); // toggleMenu toggles between open/close when clicked.

    //  3. Navigation Links
    const navLinks = ["Home", "About", "Contact", "Services"]

    return (
        //  4. Main Navbar Layout
        <nav className='bg-white shadow-md fixed w-full z-10'>
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-indigo-600">Logo</div>

                {/* 5. Desktop Navigation Links */}
                <ul className="hidden md:flex space-x-8">
                    {navLinks.map(link => (
                        <li key={link}>
                            <a href={`#${link.toLowerCase()}`} className='text-gray-700 hover:text-indigo-600 transition'>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* 6. Hamburger Icon (Mobile Only) */}
                <div className="md:hidden" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes size={24} className='pt-2'/> : <FaBars size={24} />}
                </div>

                {/* 7. Mobile Navigation Links (Dropdown Style)     */}
                {menuOpen && (
                    <ul className="md:hidden bg-white px-4 space-y-4">
                        {navLinks.map(link => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} className='block text-gray-700 hover:text-indigo-600 transition'>
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </nav>
    )
}

export default NewNavbar