import React from 'react'
import leaf1 from '../assets/leaf1.png'
import leaf2 from '../assets/leaf2.png'

const Services = () => {
    const services = [
        {id: 1, tite: 'Plan Money', description: 'The future can be even brighter but a goal without a plan is just a wish.Use our tools to plan ahead.', image: leaf1},
        {id: 2, tite: 'Save Money', description: 'With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our process & plans.',image:leaf2},
        {id: 3, tite: 'Invest Money', description: 'Invest in mutual funds tailored to you and your financial position, and watch the returns keep rolling in.',image:leaf1},
    ]
    return (
        <div className='px-4 py-16 md:px-14 mx-auto max-w-screen-2xl'>
        <div className='text-center mt-40 mx-auto'>
           <h2 className='text-2xl font-sans text-black'>A fresh approach to customer</h2>
           <p className='text-2xl font-sans text-black '> with financial freedom</p>
        </div>
        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
{
     services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow-lg cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
        <div>
            <div className='mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} alt="" className='mr-5' /></div>
            <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
            <p className='text-sm text-neutralDGrey items-center justify-start'>{service.description}</p>
            <button className='text-neutralPurple mt-5 font-semibold'>LEARN MORE</button>
        </div>
    </div>)
}
        </div>
        </div>
        
    )
} 

export default Services 