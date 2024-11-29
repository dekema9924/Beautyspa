import React, { useState } from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import TestimonialData from '../Helpers/TestimaonialData';





function Testimonial() {
    const [Curr, setCurr] = useState<number>(0)

    const HandleForwardBtn = () => {
        Curr < TestimonialData.length - 1 && setCurr(Curr + 1)

    }
    const HandleBackBtn = () => {
        Curr > 0 && setCurr(Curr - 1)
    }
    return (
        <>
            <div className='mt-10 bg-gray-100 h-[605px]'>
                <p className='capitalize text-[#BA7894] text-sm text-center pt-5'>Testimonials</p>
                <h1 className='text-[#422A3C] font-bold text-2xl text-center my-3 '>What our Customers say...</h1>
                <div className='bg-[#422A3C] sm:h-full sm:w-full w-9/12 m-auto  h-[388px] rounded-2xl text-white flex sm:flex-col sm:justify-start sm:items-end gap-10 justify-center items-center '>
                    <div className='flex w-64 sm:gap-2 sm:ml-40 sm:pt-3'>
                        <div className='flex gap-2  '>
                            <span className='w-8 h-24 sm:h-10 sm:w-4 rounded-2xl block  bg-white '></span>
                            <span className='w-8 h-40 sm:h-14 sm:w-4  rounded-2xl block  bg-white '></span>
                        </div>
                        <img className='w-[120px] sm:w-12 border-red-900 my-auto border-4 h-[120px] object-cover rounded-full' src={TestimonialData[Curr].profileImg} alt="profileImg" />
                    </div>
                    <div className='pl-5 relative  sm:flex sm:flex-col  '>
                        <FaQuoteLeft className='size-9 mr-10 relative right-10 ' />
                        <p className='text-lg'>{TestimonialData[Curr].name}</p>
                        <p className='text-sm'>{TestimonialData[Curr].location}</p>

                        <h1 className='font-bold text-2xl mt-5 sm:text-lg sm:w-40'>{TestimonialData[Curr].heading}</h1>
                        <blockquote className='sm:text-sm w-96 sm:w-80 sm:mt-5'>
                            {TestimonialData[Curr].comment}
                            <FaQuoteRight className='size-9 float-right flex ' />
                        </blockquote>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-5'>
                    <MdKeyboardArrowLeft onClick={HandleBackBtn} className='size-9 border-2 bg-white text-black hover:bg-black hover:text-white rounded-full cursor-pointer' />
                    <MdKeyboardArrowRight onClick={HandleForwardBtn} className='size-9 border-2 bg-white text-black hover:bg-black hover:text-white  rounded-full cursor-pointer' />
                </div>
            </div>
        </>
    )
}

export default Testimonial