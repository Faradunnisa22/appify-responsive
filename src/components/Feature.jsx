import React from 'react'
import leaf1 from '../assets/leaf1.png'
import leaf2 from '../assets/leaf2.png'
import feature1 from '../assets/feature1.png'
import feature2 from '../assets/feature2.png'
import feature3 from '../assets/feature3.png'



const Feature =()=> {
    return (
        <div>
          <section>
            <div className='mx-auto grid max-w-screen-2xl my-8 px-4 lg:px-14'>
                <div className='flex  flex-col md:flex-row items-center  justify-between mx-auto md:w-11/12'>
                   
                    <img src={feature1} alt=""  className='w-60 md:w-80 mb-4 md:mb-0 '/>
                    <div className='md:ml-6 md:text-left '>
                        <h2 className='text-2xl  font-medium mb-2'>Your money is well protected </h2><p className='text-2xl  font-medium mb-4'>and secured</p>
                        <ul className='space-y-3 '>
                            <li className='relative ml-16'><strong>Bank-grade Security</strong><p>Our payment processors are PCIDSS compliant to ensure</p><p>optimum security of your data.</p>
                            <img src={leaf1} alt="" className='absolute left-[-70px] top-0 w-16 h-16'/>
                            </li>
                            <li className='relative ml-16'><strong>Best Investments</strong><p>We invest in low risk fixed income securities which include </p><p>treasury bills and mutual funds.</p>
                            <img src={leaf2} alt="" className='absolute left-[-70px] top-0 w-16 h-16'/>
                            </li>
                            <li className='relative ml-16'><strong>Under Secure Watch</strong><p>Invest your savings in low risk financial instruments,</p> <p>registered with the Securities.</p>
                            <img src={leaf1} alt="" className='absolute left-[-70px] top-0 w-16 h-16'/>
                            </li>
                        </ul>
                    </div>
                </div>

{/* second block */}
                <div className='mx-auto grid max-w-screen-2xl my-8 px-4 lg:px-14'>
                    <div className='flex flex-col md:flex-row-reverse items-center justify-between mx-auto md:w-11/12  md:ml-0'>
                    <img src={feature2} alt=""  className='w-60 md:w-80 mb-4 md:mb-0 md:ml-6 '/>
                    <div className='md:ml-6 md:text-left md:mr-96'>
                    <h2 className='text-2xl  font-medium mb-4 '>Start building wealth</h2><p className='text-2xl  font-medium mb-4'>
                    easily in 5 minutes</p>
                        <ul className='space-y-3 '>
                            <li className='relative ml-16'><strong>Create an account</strong><p>Sign up for an account with your name, email and phone</p><p> number.</p>
                            <img src={leaf1} alt="" className='absolute left-[-70px] top-0 w-16 h-16'/>
                            </li>
                            <li className='relative ml-16'><strong>Add a payment method</strong><p>Using your debit card, bank account, USSD, QR Code, setup</p><p>your first plan.</p>
                            <img src={leaf2} alt="" className='absolute left-[-70px] top-0 w-16 h-16'/>
                            </li>
                            <li className='relative ml-16'><strong>Watch your money grow</strong><p>Sit back, relax & let your money work for you all day,</p><p>everyday.</p>
                            <img src={leaf1} alt="" className='absolute left-[-70px] top-0 w-16 h-16'/>
                            </li>
                            </ul>
                    </div>
</div>

{/* Third block */}
<div className='mx-auto grid max-w-screen-2xl my-8 px-4 lg:px-14'>
                <div className='flex  flex-col md:flex-row items-center  justify-between mx-auto md:w-11/12 '>
                   
                    <img src={feature3} alt=""  className='w-60 md:w-80 mb-4 md:mb-0 '/>
                    <div className='md:ml-96 md:text-left '>
                        <h2 className='text-2xl  font-medium mb-2'>Your money is well protected </h2><p className='text-2xl  font-medium mb-4'>and secured</p>
                        <ul className='space-y-3 '>
                            <li className='relative ml-16'><strong>Bank-grade Security</strong><p>Our payment processors are PCIDSS compliant to ensure</p><p>optimum security of your data.</p>
                            <img src={leaf1} alt="" className='absolute left-[-70px] top-0 w-16 h-16'/>
                            </li>
                            <li className='relative ml-16'><strong>Best Investments</strong><p>We invest in low risk fixed income securities which include </p><p>treasury bills and mutual funds.</p>
                            <img src={leaf2} alt="" className='absolute left-[-70px] top-0 w-16 h-16'/>
                            </li>
                            <li className='relative ml-16'><strong>Under Secure Watch</strong><p>Invest your savings in low risk financial instruments,</p> <p>registered with the Securities.</p>
                            <img src={leaf1} alt="" className='absolute left-[-70px] top-0 w-16 h-16'/>
                            </li>
                        </ul>
                    </div>
                </div>
</div>
                </div>
            </div>
          </section>
        </div>
    )
}

export default Feature
