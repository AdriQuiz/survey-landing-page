import React from 'react'
import phone from "../assets/phone.jpg";
import { CircleCheckBig } from 'lucide-react';

function Customer() {
    return (
        <div className='min-h-[50vh] flex flex-col lg:flex-row bg-white font-sora'>
            <div className='relative w-full lg:w-1/2 h-[300px] lg:h-auto'>
                <img src={phone} alt="" className='h-full w-full object-cover' />
                <div className='hidden lg:block absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent' />
            </div>

            <div className='p-10 lg:p-16 flex flex-col justify-center items-center lg:items-start text-gray-500'>
                <h1 className='text-2xl font-bold mb-4 text-center lg:text-start'>Your customers are people, not numbers</h1>
                <p className='mb-10 mx-10 lg:mx-0'>
                    AskNicely is the world&apos;s only live NPS system, so your business can respond
                    to customer feedback in real time. Direct customer feedback automatically to the
                    right department.
                </p>
                <ul className='list-none'>
                    <div className='flex items-center space-x-4 mb-5'>
                        <CircleCheckBig height={40} width={40} />
                        <li>Measure Customer Happiness</li>
                    </div>
                    <div className='flex items-center space-x-4 mb-5'>
                        <CircleCheckBig height={40} width={40} />
                        <li>Gain Insights to Improve Customer Service</li>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <CircleCheckBig height={40} width={40} />
                        <li>Increase retention and Referrals</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Customer