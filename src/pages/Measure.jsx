import React from 'react'
import datos from "../assets/datos.jpg";
import { CircleCheckBig } from 'lucide-react';
import Button from '../components/Button';

function Measure() {
    return (
        <div className='min-h-[100vh] flex flex-col relative font-sora'>
            <div className='flex-1 bg-gradient-to-r from-color-2 to-color-1'>
                <div className='py-20 lg:pl-24 px-10'>
                    <h1 className='text-4xl font-bold text-center lg:text-start mb-5'>The simple way to measure NPS</h1>
                    <p className='max-w-md text-center lg:text-start mb-5 mx-auto lg:mx-0'>Collect real time customer feedback based on the Net Promoter Score framework.</p>
                    <p className='text-center lg:text-start font-bold mb-5'>Get up and running today!</p>
                    <div className='lg:hidden flex justify-center lg:justify-start'>
                        <Button content={"Start Asking Today"} />
                    </div>
                </div>
            </div>
            <div className='flex-1 bg-white'>
                <div className='lg:pt-20 lg:pl-24 pt-10 px-10 pb-8'>
                    <h1 className='text-4xl text-gray-500 text-center lg:text-start font-bold mb-5'>Average Response Rate: +53%</h1>
                    <p className='text-gray-500 max-w-md text-center lg:text-start mx-auto lg:mx-0 mb-5'>AskNicely uses dozens of innovations to achieve the industry's highest NPS survey response rate</p>
                </div>
                <div className='text-gray-500 flex flex-col items-center lg:items-start w-full lg:pl-24 lg:justify-start gap-10 bg-white px-6 mb-8'>
                    <div className='flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:space-x-5'>
                        <CircleCheckBig height={30} width={30} className='mx-auto mb-2 lg:mx-0' />
                        <div>
                            <h3 className='text-2xl font-bold'>One Touch Surveys</h3>
                            <p className='max-w-sm'>Create beautiful surveys with the touch of a button. Ready for any device.</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:space-x-5'>
                        <CircleCheckBig height={30} width={30} className='mx-auto mb-2 lg:mx-0' />
                        <div>
                            <h3 className='text-2xl font-bold'>Survey Fatigue Protection</h3>
                            <p className='max-w-sm'>Save yourself from surveys being worn out with our reporting tools.</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:space-x-5'>
                        <CircleCheckBig height={30} width={30} className='mx-auto mb-2 lg:mx-0' />
                        <div>
                            <h3 className='text-2xl font-bold'>Triggered Delivery</h3>
                            <p className='max-w-sm'>Build out triggers and circumstances to automate your survey delivery.</p>
                        </div>
                    </div>
                </div>


            </div>
            <img src={datos} className='hidden xl:block absolute lg:right-16 lg:top-28 top-1/2 rounded-lg shadow-lg' alt="data" height={650} width={550} />
        </div>
    )
}

export default Measure