import { IoIosRose } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";






function Footer() {
    return (
        <>
            <footer className='bg-[#241520] text-white  ' >
                <div className='flex items-center justify-between sm:ml-5 ml-20 pt-5' >
                    <div className="  flex items-center ">
                        <IoIosRose className=" size-10 text-[#BA7894] " />
                        <p className="text-[#BA7894]">BeautySpa</p>
                    </div>
                    <div className='flex items-center  gap-5 text-white mr-20 sm:mr-5  '>
                        <div className='border-2 border-[#ECBFD3] w-9 flex items-center justify-center h-9 rounded-lg'><FaFacebookF /></div>
                        <div className='border-2 border-[#ECBFD3] w-9 flex items-center justify-center h-9 rounded-lg'><FaXTwitter /></div>
                        <div className='border-2 border-[#ECBFD3] w-9 flex items-center justify-center h-9 rounded-lg'><FaLinkedinIn /></div>
                        <div className='border-2 border-[#ECBFD3] w-9 flex items-center justify-center h-9 rounded-lg'><FaInstagram /></div>
                    </div>
                </div>
                <hr className=' w-10/12 h-2 opacity-20  m-auto border-b-0 mt-10  ' />
                <div className='flex sm:flex-wrap justify-around  sm:gap-10 mt-10'>
                    <div className=''>
                        <h1 className='font-bold'>Explore</h1>
                        <ul className='text-sm mt-3 flex flex-col gap-1'>
                            <li>Home</li>
                            <li>AbousUs</li>
                            <li>Services</li>
                            <li>Blog </li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-bold'>Utility Pages</h1>
                        <ul className='text-sm mt-3 flex flex-col gap-'>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>                         
                        </ul>
                    </div>
                    <div className='w-80 '>
                        <h1 className='font-bold'>Keep in Touch</h1>
                        <ul className='text-sm mt-3 flex flex-col gap-1'>
                            <li>Address: Mariendalsvej 50D 2 2000 Frederiksberg. </li>
                            <li>Mail:support@servicemarket.com </li>    
                            <li>Phone: (+12) 345-678-9000</li>                     
                        </ul>
                    </div>
                </div>
                <div className='bg-[#160813] text-center mt-10 h-14 pt-4 '>
                    <p>© 2025, ServiceMarket.dk | All rights reserved</p>
                </div>

            </footer>

        </>
    )
}

export default Footer