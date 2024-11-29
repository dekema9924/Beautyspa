import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";





function Contact() {
    return (
        <>
            <div className='bg-[#422A3C] h-60  flex flex-col items-center gap-3 justify-center  '>
                <p className='uppercase text-xs text-[#ECBFD3]'>Get in touch with us</p>
                <h1 className='text-white capitalize text-3xl w-80 text-center'>We are ready to assist you in 24X7</h1>
            </div>
            <div className='flex sm:flex-col items-center gap-10 justify-center h-[570px] sm:h-[870px]'>
                <div className='relative sm:w-full  p-10 h-[400px] w-[400px]'>
                    <img className='w-80 h-80' src="https://plus.unsplash.com/premium_photo-1675695700408-ca54e14503a3?q=80&w=2211&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <img className='w-80 shadow-2xl h-80 relative bottom-72 right-7 sm:right-4' src="https://images.unsplash.com/photo-1504977402025-84285fea814b?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='sm:pl-10'>
                    <p className='uppercase text-xs text-[#ECBFD3] '>Get in touch</p>
                    <h1 className='capitalize text-3xl w-80 '>We are here to help you always...</h1>
                    <p className='font-thin text-xs w-96 my-5 sm:w-full'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to many desktop publishing packages.</p>
                    <div className='flex gap-3'>
                        <div className='border-2 border-[#422A3C] rounded-md w-10 h-10'><IoHomeOutline className='size-6  m-auto mt-1 text-[#422A3C] ' /></div>
                        <div>
                            <h3 className='font-semibold text-sm'>Visit Us</h3>
                            <p className='text-xs'>Mariendalsvej 50D 2 2000 Frederiksberg.</p>
                        </div>
                    </div>
                    <div className='flex gap-3 my-5'>
                        <div className='border-2 border-[#422A3C] rounded-md w-10 h-10'><CiMail className='size-6  m-auto mt-1 text-[#422A3C] ' /></div>
                        <div>
                            <h3 className='font-semibold text-sm'>Drop Us</h3>
                            <p className='text-xs'>support@beautyness.com</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='border-2 border-[#422A3C] rounded-md w-10 h-10'><MdOutlinePhone className='size-6  m-auto mt-1 text-[#422A3C] ' /></div>
                        <div>
                            <h3 className='font-semibold text-sm'>Call Us</h3>
                            <p className='text-xs'>Call: 1-800-123-9999</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#FBF2E0] h-[600px] flex flex-col justify-center items-center gap-2'>
                <p className='uppercase text-xs text-[#ECBFD3]'>Schedule your appointment</p>
                <h1 className=' text-3xl w-80 text-center '>Get in touch</h1>
                <p className='text-xs font-thin w-96 text-center sm:w-80'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <form action="" className='w-[600px] sm:w-full my-4  bg-white h-96 rounded-xl  shadow-2xl flex flex-col gap-1 justify-center pl-14 sm:pl-8'>
                        <div className='flex mt-5 items-center relative '>
                            <CiUser className='absolute ml-3' />
                            <input className='border-2 outline-none w-11/12 pl-10 text-sm h-10 rounded-md' type="text" placeholder='Name' />
                        </div>
                        <div className='flex items-center relative'>
                            <CiMail className='absolute ml-3' />
                            <input className='border-2 outline-none w-11/12 pl-10 text-sm h-10 rounded-md' type="email" placeholder='Email' />
                        </div>
                        <div className='flex items-center relative'>
                            <MdOutlinePhone className='absolute ml-3' />
                            <input className='border-2 outline-none w-11/12 pl-10 text-sm h-10 rounded-md' type='phone' placeholder='Phone' />
                        </div>
                        <div className='flex items-center relative'>
                            <IoBookOutline className='absolute ml-3' />
                            <input className='border-2 outline-none w-11/12 pl-10 text-sm h-10 rounded-md' type="text" placeholder='Service' />
                        </div>
                        <div className='flex relative '>
                            <IoBookOutline className='absolute ml-3 mt-1' />
                            <textarea className='border-2 h-20 outline-none w-11/12 pl-10 text-sm  rounded-md' placeholder='Any notes for us' />
                        </div>
                    <button className='w-11/12 bg-[#422A3C] text-white h-8 text-sm uppercase'>Submit</button>
                </form>

            </div>

        </>
    )
}

export default Contact