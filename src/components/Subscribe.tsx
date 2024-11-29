import { MdOutlineEmail } from "react-icons/md";

function Subscribe() {
    return (
        <div className='flex items-center h-[414px] justify-center gap-10 sm:items-start sm:flex-col sm:mt-40 sm:p-3'>
            <img className='w-[50%] sm:w-full rounded-lg sm:h-52 h-64 object-cover' src="https://plus.unsplash.com/premium_photo-1664048713305-cccf42f0b5b7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className=' '>
                <h1 className='font-bold text-xl w-fit '>Subscribe to our newsletter</h1>
                <p className='font-thin w-80 my-2 text-xs'>Sign up for our newsletter to stay up-to-date on the latest promotions, discounts, and new features releases.</p>
                <form action="" className='border-2 border-gray-300 w-96 sm:w-80 px-5 sm:px-1 rounded-3xl flex h-14 items-center'>

                    <div className='w-80 flex items-center'>   
                        <MdOutlineEmail className='size-6 ml-3 sm:ml-0' />
                        <input className='outline-none pl-5' type="email" name="email" placeholder='Enter your email' />
                    </div>
                    <button className='w-44 h-10 bg-black text-sm sm:px-2  rounded-2xl text-white cursoer-pointer'>Subscribe</button>

                </form>
            </div>
        </div>
    )
}

export default Subscribe