import { IoIosRose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    const [ToggleLanguage, setToggleLanguage] = useState<boolean>(false)
    const [ToggleMobileNavbar, setToggleMobileNavbar] = useState<boolean>(false)

    const HandleLanguage = () => {
        setToggleLanguage(prev => !prev)
    }
    const HandleMobileNav = () => {
        setToggleMobileNavbar(prev => !prev)
    }
    const HandleRemoveNav =()=>{
        setToggleMobileNavbar(false)
    }
    return (
        <>
            <header className="flex justify-between shadow-md h-20 items-center ">
                <div className=" ml-10 flex items-center ">
                    <IoIosRose className=" size-10 text-[#BA7894] " />
                    <p className="text-[#BA7894]">BeautySpa</p>
                </div>
                <ul className=" whitespace-nowrap flex text-sm items-center gap-10 mr-10 sm:hidden">
                    <Link to={'/'} className="cursor-pointer">Home </Link>
                    <Link to={'/about'} className="cursor-pointer">About Us</Link>
                    <Link to={'/contact'} className="cursor-pointer">Contact Us</Link>
                    <div className=" flex flex-col relative items-center">
                        <div className='flex items-center'>
                            <li>EN</li>
                            <IoIosArrowDown onClick={HandleLanguage} className="cursor-pointer" />
                        </div>
                        <div className={!ToggleLanguage ? " w-20 text-center h-0 overflow-hidden transition-all duration-800 bg-white rounded-lg absolute top-14" : "border-2 transition-all duration-800 h-12  w-20 text-center bg-white rounded-lg absolute top-14"}>
                            <p className="hover:bg-[#BA7894] cursor-pointer hover:text-white">ESP</p>
                            <p className="hover:bg-[#BA7894] cursor-pointer hover:text-white">FRN</p>
                        </div>
                    </div>

                    <div className="flex items-center  w-60 gap-3">
                        <button className=" h-10 w-11/12 bg-white rounded-md border-2 border-[#BA7894]">Login</button>
                        <button className="h-10 w-11/12 text-white bg-black rounded-md">SignUp</button>
                    </div>

                </ul>

                <div onClick={HandleMobileNav} className=" w-8 h-8 mr-10 cursor-pointer flex-col gap-2 cursoer-pointer hidden sm:flex ">
                    <span className={!ToggleMobileNavbar ? "block w-11/12 border-2 border-[#BA7894] border-x-0 border-t-0 transition-transform duration-700" : "hidden transition-all duration-700" }></span>
                    <span className={!ToggleMobileNavbar ? "block w-11/12 border-2 border-[#BA7894] border-x-0 border-t-0 transition-transform duration-700" : "block w-11/12 border-2 border-[#BA7894] border-x-0 border-t-0 rotate-[230deg] translate-y-[10px] transition-transform duration-700" }></span>
                    <span className={!ToggleMobileNavbar ? "block w-11/12 border-2 border-[#BA7894] border-x-0 border-t-0 transition-transform duration-700" : "block w-11/12 border-2 border-[#BA7894] border-x-0 border-t-0 rotate-[310deg] transition-transform duration-700 " }></span>
                </div>
            </header>
        
                <ul className={!ToggleMobileNavbar ? " whitespace-nowrap hidden sm:flex flex-col border-2 text-sm pl-10 gap-10 m-auto h-0 overflow-hidden transition-all duration-700" : " whitespace-nowrap hidden sm:flex flex-col text-sm pl-10 pt-4 border-2 gap-10 m-auto transition-all duration-700 h-80 bg-white overflow-hidden shadow-md "}>
                    <Link onClick={HandleRemoveNav} to={'/'} className="cursor-pointer">Home</Link>
                    <Link onClick={HandleRemoveNav}  to={'/about'} className="cursor-pointer">About Us</Link>
                    <Link onClick={HandleRemoveNav}  to={'/contact'} className="cursor-pointer">Contact Us</Link>
                    <div className=" flex flex-col  relative">
                        <div className='flex items-center'>
                            <li>EN</li>
                            <IoIosArrowDown onClick={HandleLanguage} className="cursor-pointer" />
                        </div>
                        <div className={!ToggleLanguage ? " w-20 text-center h-0 overflow-hidden transition-all duration-800 bg-white rounded-lg absolute top-14" : "border-2 transition-all duration-800 h-12  w-20 text-center bg-white rounded-lg absolute top-5"}>
                            <p className="hover:bg-[#BA7894] cursor-pointer hover:text-white">ESP</p>
                            <p className="hover:bg-[#BA7894] cursor-pointer hover:text-white">FRN</p>
                        </div>
                    </div>

                    <div className="flex items-center  w-60 gap-3">
                        <button className=" h-10 w-11/12 bg-white rounded-md border-2 border-[#BA7894]">Login</button>
                        <button className="h-10 w-11/12 text-white bg-black rounded-md">SignUp</button>
                    </div>

                </ul>

         
        </>
    )
}


export default Header