import React from 'react'
import testimonial from '../assets/testimonial.png'
import { Carousel } from 'flowbite-react';
import'flowbite/dist/flowbite.min.css';

const Feature2 = () =>{
    return (
<div className='bg-gray-100'> 
<div className="-mt-9 max-w-screen-2xl mx-auto min-h-screen  h-screen px-14 p-0">
      <Carousel className='relative h-full mx-auto'>
        <div className="flex my-28 py-5 flex-col items-center justify-center md:flex-row-reverse md:w-full md:h-4 ">
            <div>
         <img src={testimonial} alt="" className='w-full h-auto md:max-w-screen-md  md:ml-52 md:mb-64 hidden md:block ' />
        
          </div>
          <div className='md:mb-80 md:px-32 md:mt-40'>
                    <h2 className='font-semibold text-2xl '>What Users Say</h2>
                     <p className='md:mt-10 text-gray-700 text-xl'>“Since the 1500s, when an unknown</p><p className='text-gray-700 text-xl '>printer took a galley of type and</p><p className='text-gray-700 text-xl'>scrambled it to make a type specimen</p><p className='text-gray-700 md:mb-10 text-xl'>book.”</p>
      

                     <h1 className='font-semibold'>Musharof Chowdhury</h1>
                     <p className='text-gray-600'>CEO, PageBulb</p>

                     <button className='text-neutralBlue font-semibold md:mt-8'>MORE STORIES</button>
               </div>
        
        
        {/* </div> */}
        </div>

        <div className="flex my-28 py-12 flex-col items-center justify-center md:flex-row-reverse md:w-full md:h-4 ">
            <div>
         <img src={testimonial} alt="" className='w-full h-auto md:max-w-screen-md md:ml-52 md:mb-64' />
          </div>
          <div className='md:mb-80 md:px-32 md:mt-40 '>
                    <h2 className='font-semibold text-2xl '>What Users Say</h2>
                     <p className='md:mt-10 text-gray-700 text-xl'>“Since the 1500s, when an unknown</p><p className='text-gray-700 text-xl '>printer took a galley of type and</p><p className='text-gray-700 text-xl'>scrambled it to make a type specimen</p><p className='text-gray-700 md:mb-10 text-xl'>book.”</p>
        {/* <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"> */}

                     <h1 className='font-semibold'>Musharof Chowdhury</h1>
                     <p className='text-gray-600'>CEO, PageBulb</p>

                     <button className='text-neutralBlue font-semibold md:mt-8'>MORE STORIES</button>
               </div>
        
        
        {/* </div> */}
        </div>

        <div className="flex my-28 py-12 flex-col items-center justify-center md:flex-row-reverse md:w-full md:h-4">
            <div>
         <img src={testimonial} alt="" className='w-full h-auto md:max-w-screen-md md:ml-52 md:mb-64 sm:hidden md:block' />
          </div>
          <div className='md:mb-80 md:px-32 md:mt-40'>
                    <h2 className='font-semibold text-2xl '>What Users Say</h2>
                     <p className='md:mt-10 text-gray-700 text-xl'>“Since the 1500s, when an unknown</p><p className='text-gray-700 text-xl '>printer took a galley of type and</p><p className='text-gray-700 text-xl'>scrambled it to make a type specimen</p><p className='text-gray-700 md:mb-10 text-xl'>book.”</p>
        {/* <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"> */}

                     <h1 className='font-semibold'>Musharof Chowdhury</h1>
                     <p className='text-gray-600'>CEO, PageBulb</p>

                     <button className='text-neutralBlue font-semibold md:mt-8'>MORE STORIES</button>
               </div>
       
        
        {/* </div> */}
        </div>

        
        
      </Carousel>
    </div>


</div>
//  for small screen




        // <div>
        //    <section>
        //     <div className=''>
        //         <div className=''>
        //             <img src={testimonial} alt="" />
        //         </div>

        //         <div>
        //             <h2 className='font-semibold text-2xl'>What Users Say</h2>
        //             <p>“Since the 1500s, when an unknown</p><p>printer took a galley of type and</p><p>scrambled it to make a type specimen</p><p>book.”</p>

        //             <h1 className='font-semibold'>Musharof Chowdhury</h1>
        //             <p className='text-gray-500'>CEO, PageBulb</p>

        //             <button className='text-neutralBlue'>MORE STORIES</button>
        //         </div>
        //         </div>
        //         </section> 
        // </div>
    )
}

export default Feature2
