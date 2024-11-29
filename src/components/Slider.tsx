import barber from '../assets/Icons/barber.png'
import footMassage from '../assets/Icons/foot-massage.png'
import makeup from '../assets/Icons/makeup.png'
import facial from '../assets/Icons/facial-treatment.png'
import shampoo from '../assets/Icons/shampoo.png'




function Slider() {
  return (
   <>
        <div className='flex items-center h-40 '>
            <div className=' slide flex  gap-10 justify-evenly w-full overflow-hidden '>
              <div className='flex flex-col relative '>
                   <span className='w-10 h-10  rounded-full bg-[#F7E5C1] absolute opacity-70 right-10'></span>
                    <img className='w-10' src={makeup} alt="" />
                    <p  className='text-xs'>Makeup-artist</p>
              </div>
              <div className='flex flex-col relative '>
                    <span className='w-10 h-10  rounded-full bg-[#F7E5C1] absolute opacity-70 right-10'></span>
                    <img className='w-10 m-auto z-50 text-[#BA7894]' src={facial} alt="" />
                    <p className='text-xs'>WellnessCenter</p>
              </div>
              <div className='flex flex-col relative '>
                    <span className='w-10 h-10  rounded-full bg-[#F7E5C1] absolute opacity-70 right-10'></span>
                    <img className='w-10' src={barber} alt="" />
                    <p  className='text-xs'>Barber Salon</p>
              </div>
              <div className='flex flex-col relative '>
                    <span className='w-10 h-10  rounded-full bg-[#F7E5C1] absolute opacity-70 right-10'></span>
                    <img className='w-10' src={shampoo} alt="" />
                    <p  className='text-xs'>FrisOrSalon</p>
              </div>
              <div className='flex flex-col relative '>
                     <span className='w-10 h-10  rounded-full bg-[#F7E5C1] absolute opacity-70 right-10'></span>
                    <img className='w-10' src={footMassage} alt="" />
                    <p  className='text-xs'>Massage Clinict</p>
              </div>
            </div>
        </div>
   </>
  )
}

export default Slider