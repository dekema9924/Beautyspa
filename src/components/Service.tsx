import { CiStar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import objArry from '../Helpers/ServiceData';

function Service() {
    return (
        <>
            <div className='mt-10'>
                <p className='capitalize text-[#BA7894] text-sm text-center'>Our services</p>
                <h1 className='text-[#422A3C] font-bold text-2xl text-center my-3 '>Recommended</h1>
                <p className='font-thin text-sm text-center mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <div className='flex items-center rounded-2xl justify-center gap-3 sm:flex-wrap'>

                    {
                        objArry.map((item) => {
                            return (
                                <>
                                    <div key={item.id} className='w-80 sm:w-5/12   flex flex-col pb-6 gap-1 border-2 rounded-3xl'>
                                        <img className='w-80 h-52 object-cover rounded-t-3xl' src={item.img} alt="" />
                                        <div className='flex justify-between pl-3 items-center'>
                                            <div className='flex gap-1 items-center'>
                                                <span><CiStar className='text-[#BA7894]' /></span>
                                                <span className='text-gray-600'>{item.star}</span>
                                            </div>

                                            <p className='font-semibold mr-3 text-xs '>{item.reviews} reviews</p>

                                        </div>
                                        <p className='font-bold pl-3'>{item.title}</p>
                                        <div className='pl-3 text-gray-600 flex items-center text-sm'>
                                            <span><CiLocationOn /></span>
                                            <span>{item.location}</span>
                                        </div>
                                        <button className='ml-3 w-11/12 h-10 mt-2 bg-[#BA7894] text-white rounded-xl  '>BOOK NOW</button>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Service