import React from 'react'
import flower from "../assets/flower.png"
import void_phone from "../assets/void_phone.png"
import Button from '../components/Button'
import { Radius, Swords, Tags, Webhook } from 'lucide-react'

function Hero() {
    return (
        <div className='min-h-[100vh] relative bg-gradient-to-r from-[#2A7B9B] via-[#57C785] to-[#EDDD53] pt-20 lg:py-24 lg:px-40 p-10'>
            <div className='flex items-center justify-center lg:justify-start mb-5'>
                <img src={flower} alt="" height={50} width={50} />
                <h1 className='text-3xl font-bold font-sora'>AskNicely</h1>
            </div>
            <div className='mb-10 text-center lg:text-left'>
                <h2 className='text-3xl font-bold mb-4'>See if your customers are happy</h2>
                <p className='mb-4 text-lg font-bold max-w-sm mx-auto lg:mx-0'>Real time customer feedback based on the Net Promoter Score framework</p>
                <div className='flex flex-col items-center lg:items-start'>
                    <Button content={"Start Asking Today"} extra={"mb-3"} />
                    <small className='inline-block font-semibold'>Sign-Up in 60 seconds - No Credit Card Required</small>
                </div>
            </div>
            <div>
                <div className='flex justify-center lg:justify-start'>
                    <small className='inline-block mb-5 font-semibold'>We&apos;re Trusted By These Great Brands</small>
                </div>
                <div className='flex space-x-7 justify-center lg:justify-start'>
                    <Radius height={50} width={50} />
                    <Swords height={50} width={50} />
                    <Tags height={50} width={50} />
                    <Webhook height={50} width={50} />
                </div>
            </div>
            <img src={void_phone} className='hidden xl:block absolute bottom-0 xl:right-64' alt="void phone" height={450} width={450} />
        </div>
    )
}

export default Hero