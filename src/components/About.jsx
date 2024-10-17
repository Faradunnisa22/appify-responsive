import React from 'react'
import { Carousel } from 'flowbite-react';
import'flowbite/dist/flowbite.min.css';
import border from '../assets/border.png'
import { Footer } from "flowbite-react";
import appify from '../assets/appify.png'
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs" ;


const About=()=> {
    return (
        <div >
           <div className='md:ml-14  md:flex md:items-center md:justify-center min-h-screen' >
           <div className='relative w-full max-w-2xl'>
            <img src={border} alt=""  className=' h-80 w-full mx-auto md:h-96 md:mt-0'/>
            <div className='mt-9 absolute inset-0 md:mb-20  items-center md:text-center  justify-center text-white  text-center md:ml-44'>
                <h2 className='font-semibold md:mr-48 text-gray-400 md:text-2xl  '>Save Your Money</h2>
                <h2 className='font-semibold md:mr-48 md:text-2xl'>Get Our Apps</h2>
                <p className='font-light sm:w-64 sm:pl-14 text-xs '>With impressive interest rates, an app, tools & guides, to plan,</p> <p className='w-64 pl-14 text-center font-light text-xs'>save & invest, Appify is the smartest way.</p>
           </div>
            </div>
           </div>
           <Footer className='relative'>
            <div className='absolute -mt-[1000px] w-full overflow-hidden md:-mt-[500px] '>
           
           
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className='relative h-96 block right-[100px] md:-left-[500px]'>
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-neutralDarkBlue"></path>
    </svg>
    <div className='bg-neutralDarkBlue md:pt-28 justify-between items-center'>

    <div className='relative md:absolute md:inset-x-0 md:-mt-40 md:mb-9 pl-7'>
             
           
            

            <a href='/'> <img src={appify} alt=""className='md:-mt-20 -mt-1  ' /></a>
            <div className='text-white  md:items-center md:justify-between md:mb-0  md:pl-11 '>
              <h2 className='font-sans text-xl font-bold md:text-2xl mt-5'>Get the future you want</h2>
              <p className='font-sans sm:text-sm'>We offer great advice, tools and guides to help</p>
              <p className='font-sans sm:text-sm'>you plan your best future for free.</p>
            </div>
        </div>

          
        <div className="md:absolute md:ml-96 mt-10  grid  grid-cols gap-8 px-6 md:-mt-64 md:pl-32 md:grid-cols-4">
          <div >
            <Footer.Title title="Company" className='text-white' />
            <Footer.LinkGroup col className='text-white'>
              <Footer.Link href="#">About Us</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Products" className='text-white' />
            <Footer.LinkGroup col className='text-white'>
              <Footer.Link href="#">Features</Footer.Link>
              <Footer.Link href="#">Templates</Footer.Link>
              <Footer.Link href="#">Pricing</Footer.Link>
              <Footer.Link href="#">Security</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Support" className='text-white'/>
            <Footer.LinkGroup col className='text-white'>
              <Footer.Link href="#">FAQ</Footer.Link>
              <Footer.Link href="#">Terms & Conditions</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Customer Stories</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Connect"className='text-white' />
            <Footer.LinkGroup col className='text-white'>
              <Footer.Link href="#">support@pagebulb.com</Footer.Link>
              <Footer.Link href="#">+234 903 0000 857</Footer.Link>
              <Footer.Link href="#"></Footer.Link>
              <Footer.Link href="#">Follow Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full md:absolute md:-mt-32 md:left-[1100px] px-4 py-6    sm:flex sm:items-center sm:justify-between">
          {/* <Footer.Copyright href="#" by="Flowbite™" year={2022} /> */}
          <div className="mt-4 flex space-x-6  sm:mt-0 sm:justify-center  ">
          <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                        <Footer.Icon href="#" icon={BsGithub} />
                        <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        
              </div>
          
        </div>




    </div>

        </Footer>
        </div>
    )
}

export default About

