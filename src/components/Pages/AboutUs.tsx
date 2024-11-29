
import ClipboardIcon from '../../assets/Icons/clipboard.png'
import ServiceIcon from '../../assets/Icons/premium-service.png'
import TreatmentIcon from '../../assets/Icons/beauty-treatment.png'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Testimonial from '../Testimonial';

function AboutUs() {
    return (
        <>
            <div className='bg-[#422A3C] h-60 flex flex-col items-center gap-3 justify-center  '>
                <p className='uppercase text-xs text-[#ECBFD3]'>Short story about us</p>
                <h1 className='text-[#F7E5C1] text-2xl w-72 text-center'>The big story behind, our beautyness center</h1>
                <button className='text-white bg-[#BA7894] text-xs w-[110px] h-8'>Contact Us</button>
            </div>

            <div className='flex items-center justify-center flex-col h-[460px]'>
                <p className='uppercase text-xs text-[#ECBFD3] text-center mt-20 mb-3'>Our values</p>
                <h1 className='font-semibold text-2xl text-center mb-5 '>The work values we thrive for</h1>
                <div className='flex  items-center  sm:w-full w-[500px] justify-around'>
                    <div className=' bg-[#F7E5C1] w-16 h-16 border-2 rounded-md border-gray-200 '>
                        <img className='w-10 m-auto pt-3 ' src={TreatmentIcon} alt="ServiceImg" />
                    </div>
                    <div>
                        <p className='font-semibold'>Beauty Experts</p>
                        <p className='text-sm font-thin sm:w-60  w-[400px]'>The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.</p>
                    </div>
                </div>

                <div className='flex  sm:w-full items-center my-5   w-[500px] justify-around'>
                    <div className=' bg-[#F7E5C1] w-16 h-16 border-2 rounded-md border-gray-200 '>
                        <img className='w-10 m-auto pt-3 ' src={ClipboardIcon} alt="ServiceImg" />
                    </div>
                    <div>
                        <p className='font-semibold'>Great Services</p>
                        <p className='text-sm font-thin sm:w-60   w-[400px]'>The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.</p>
                    </div>
                </div>

                <div className='flex  sm:w-full items-center  w-[500px] justify-around mb-20'>
                    <div className=' bg-[#F7E5C1] w-16 h-16 border-2 rounded-md border-gray-200 '>
                        <img className='w-10 m-auto pt-3 ' src={ServiceIcon} alt="ServiceImg" />
                    </div>
                    <div>
                        <p className='font-semibold'>100% Genuine</p>
                        <p className='text-sm font-thin sm:w-60  w-[400px]'>The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.</p>
                    </div>
                </div>
            </div>

            <div className='bg-[#F7E5C1] h-[500px] sm:h-[780px]  flex items-center pl-10 sm:pl-0 '>
                <div className='flex sm:flex-col gap-5 items-center sm:items-start justify-start pl-10 sm:w-full sm:h-[760px] bg-[#422A3C] h-80 w-11/12'>
                    <img className='w-60 sm:py-6' src="https://plus.unsplash.com/premium_photo-1669675936132-cd68d8a1ac5f?q=80&w=2188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className=' w-96 sm:w-full text-white ml-5 sm:ml-0'>
                        <p className='uppercase text-xs '>About us</p>
                        <p className='text-2xl font-semibold my-3 sm:w-[320px]  '>It's the bridge between service companies and consumers.</p>
                        <p className='text-sm my-4 sm:w-full '>ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform. Our aim is to simplify and improve everyday life for citizens in Denmark. One platform that brings together all services in an easy and controlled environment.</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center sm:flex-col justify-between gap-20 sm:gap-0 '>
                <div className='sm:pl-5 ml-10 sm:ml-0 sm:w-full'>
                    <p className='c text-xs uppercase mt-14 w-32'>What includes?</p>
                    <p className='text-2xl font-semibold  w-72 my-4'>The start of the journey</p>
                    <p className='text-xs font-thin w-96 sm:w-full'>ServiceMarket.dk was founded in 2021 by two young entrepreneurs who saw a problem with the fragmented service industry in Denmark. There were thousands of small businesses offering services, but it was difficult for consumers to find them and know which ones to choose. They developed the idea of creating a platform that would bring all these service providers together in one place, making it easier for consumers to find what they need and get their issues resolved quickly and easily. Without having to go to many different websites, each with their own booking system.</p>
                    <p className='my-3 font-semibold'>Our Methodology:</p>
                    <div className='flex gap-3'>
                        <IoMdCheckmarkCircleOutline className='text-[#BA7894] size-8' />
                        <div>
                            <p className='font-semibold'>The Assessment stage</p>
                            <p className='text-xs font-thin  w-80 my-2'>The point of using Lorem Ipsum is that it has a more-or-less normal letters.</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <IoMdCheckmarkCircleOutline className='text-[#BA7894] size-8' />
                        <div>
                            <p className='font-semibold'>The Innitialisation stage</p>
                            <p className='text-xs font-thin  w-80 my-2'>The point of using Lorem Ipsum is that it has a more-or-less normal letters.</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <IoMdCheckmarkCircleOutline className='text-[#BA7894] size-8' />
                        <div>
                            <p className='font-semibold'>The Treatment stage</p>
                            <p className='text-xs font-thin  w-80 my-2'>The point of using Lorem Ipsum is that it has a more-or-less normal letters.</p>
                        </div>
                    </div>
                </div>

                <div className=' w-11/12 h-11/12 sm:w-full'>
                    <img className='w-full mr-10  h-full object-contain' src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
            <div className='sm:h-[800px]'>
                <Testimonial/>
            </div>
        </>
    )
}

export default AboutUs