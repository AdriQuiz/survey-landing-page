import React from 'react';
import checking from "../assets/checking.jpg";
import Button from '../components/Button';

function Happy() {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${checking})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col lg:items-end items-center lg:px-40 justify-center text-white text-center px-4">
                <h1 className="text-4xl font-bold mb-4">See if your customers are happy</h1>
                <p className="mb-6 max-w-sm text-center lg:text-end">
                    Real time customer feedback based on the Net Promoter Score framework
                </p>
                <Button content={"Start Asking Today"} extra={"mb-3"} />
                <small className='inline-block font-semibold'>Sign-Up in 60 seconds - No Credit Card Required</small>
            </div>
        </div>

    )
}

export default Happy