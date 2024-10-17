import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll';
import { FaBars,FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { link: "HOME", path: "home" },
        { link: "FEATURES", path: "features" },
        { link: "ABOUT", path: "about" },
        { link: "HOW IT WORKS", path: "work" },
        { link: "TESTIMONIALS", path: "testimonial" },
        // { link: "Download", path: "download" },
    ];
    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0' >
            <nav className={`px-4 lg:px-14 py-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href="/" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} alt="" className='w-40 inline-block items-center' /></a>
                    <ul className='md:flex space-x-12 hidden '>
                        {
                            navItems.map(({ link, path }) =>
                                <Link
                                    to={path}
                                    key={path}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    className='block cursor-pointer text text-black font-bold py-2 px-4 first:text-neutralBlue'
                                >
                                    {link}</Link>)
                        }
                            </ul>
                        <div className='space-x-12 hidden lg:flex items-center'>

                        <button className="bg-neutralBlue hover:bg-blue-600 active:bg-neutralBlue text-white transition-all rounded-md duration-300 focus:outline-none focus:ring focus:ring-violet-300 w-32 h-8">
                            DOWNLOAD
                        </button>
                        </div>
                        <div  className='md:hidden'>
                            <button
                            onClick={toggleMenu}
                            className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6 ' />) : (<FaBars className='h-6 w-6 ' />)
           }
                            </button>
                        </div>
                </div>
<div className={`space-y-4 px-4 py-7 mt-16 bg-blue-300 ${ isMenuOpen ? "block fixed top-0 left-0 right-0":"hidden"}`}>
{
                            navItems.map(({ link, path }) =>
                                <Link
                                    to={path}
                                    key={path}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    className='block cursor-pointer text text-black font-bold py-2 px-4 first:text-neutralBlue'
                                >
                                    {link}</Link>)
                        }  
</div>
            </nav>
        </header>
    )
}

export default Navbar