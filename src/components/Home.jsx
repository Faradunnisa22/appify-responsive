import React,{useState} from 'react'
import hero from '../assets/hero.png';
import { Carousel } from 'flowbite-react';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight ,FaChevronLeft,FaChevronRight} from "react-icons/fa6";
const Home = ()=> {
    

 
    return (
        <div className='bg-white' >
            <div className='px-4  lg:px-14  max-w-screen-3xl mx-auto min-h-screen h-screen '>
                <Carousel className='w-full mx-auto'>
                <div className='my-28  md:my-32 flex flex-col py-12 md:flex-row-reverse items-center justify-center  p-6 gap-12'>

                    <div className=' w-full max-w-xs'>
                    <img src={hero} alt="hero" className='w-full h-auto rounded-lg shadow-md'/>
                </div>
                <div className='md:w-1/2'>
              <h1 className=' font-thin text-gray-500 text-3xl md:w-2/3 leading-tight'>
              Appify helps to</h1>
              <h1 className='text-6xl font-thin mb-2 '>Get Your Money </h1>      
               <h1 className='font-semibold text-6xl'>Working</h1>                            
               <p className='font-thin text-xl text-black'> With impressive interest rates, an app, tools & guides, to plan, save & invest, Appify is the smartest way.</p>
                  </div>
              </div>
          </Carousel>
           <section className='container mx-auto md:-mt-32 '>
            <div className='bg-white border p-16 rounded-lg shadow-lg'>
            <h2 className='text-lg text-center font-semibold '>Trusted by</h2>
            
            </div>
           </section>
            </div>
        </div>
    )
}

export default Home
