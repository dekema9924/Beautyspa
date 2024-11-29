import { PiHairDryerFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import Section from "./Section"
import Service from "./Service"
import Slider from "./Slider"
import Subscribe from "./Subscribe"
import Testimonial from "./Testimonial"





function LandingPage() {
    return (
        <>
            <div className=" w-full h-[700px] bg-no-repeat bg-cover  bg-[url('https://plus.unsplash.com/premium_photo-1664049686115-48c1152f8d2d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                <div className=" flex flex-col  justify-center sm:justify-start sm:pt-24 items-center w-6/12 sm:w-full gap-5  bg-gradient-to-r from-[#422A3C] via-[#7b4c6f] to pink-300  h-full">
                    <div className="flex text-white text-lg items-center w-fit sm:w-80 ">
                        <PiHairDryerFill className="text-[#F7E5C1] size-6 " />
                        <p className=" uppercase text-[.7em] w-96 ">hair salon, masseuse, beauty salon</p>
                    </div>
                    <h1 className="font-bold  text-[2em] text-[#F7E5C1] w-96 sm:w-80">Find a service close to you</h1>
                    <p className="text-white w-96 sm:w-80   ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam libero vitae rerum.</p>

                    <form className=" flex gap-5 sm:flex-col flex-wrap border-2 border-red-200  sm:h-80 ml-auto sm:w-full rounded-3xl bg-white sm:p-4  p-4 relative left-36 sm:left-0 justify-between" action="">
                        <div className="flex sm:flex-col border-2s gap-5 ml-5">
                            <div>
                                <label className="text-lg text-[#BA7894] " htmlFor="service">Service Name</label>
                                <div className="flex items-center relative">
                                    <input className="border-b-2 outline-none sm:w-8/12 w-80 sm:pl-2 border-black text-black" type="text" name="service" placeholder="Book your service" />
                                    <CiSearch className="absolute left-72 sm:left-48 size-5" />
                                </div>
                            </div>
                            <div>
                                <label className="text-lg text-[#BA7894] " htmlFor="address">Address</label>
                                <div className="flex items-center relative">
                                    <input className="border-b-2 outline-none sm:w-8/12 w-80 sm:pl-2 border-black text-black" type="text" name="address" placeholder="Where" />
                                    <CiLocationOn className="absolute left-72 sm:left-48 size-5" />
                                </div>
                            </div>

                        </div>
                        <div className="flex items-center text-white w-fit mr-5 sm:my-10  ">
                            <button className="bg-[#BA7894]  w-40 h-14 rounded-2xl cursor-pointer">Search</button>
                            <CiSearch className="size-7 absolute left-32" />
                        </div>
                    </form>
                </div>
            </div>
            <Slider />
            <Section />
            <Service />
            <Testimonial />
            <Subscribe />
        </>
    )
}

export default LandingPage