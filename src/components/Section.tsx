
import React from 'react'

function Section() {
  return (
    <>

        <section className=' w-full '>
            <h1 className='font-bold text-center'>We are Experienced in making you beautiful</h1>
            <p className='text-sm font-thin text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className=' s w-11/12 m-auto  p-5 grid grid-cols-3 sm:grid-cols-2   grid-flow-row-dense gap-y-3 gap-x-3 '>
                <img className=' h-[500px] rounded-l-2xl w-11/12 sm:h-96 row-span-2 ' src=" https://plus.unsplash.com/premium_photo-1661423984691-5c758efcae1c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className='h-60 sm:rounded-r-2xl w-11/12 sm:h-30 object-cover ' src=" https://plus.unsplash.com/premium_photo-1661490144260-5fdc985e4cdb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className=' h-60 rounded-r-2xl sm:h-32  w-11/12 object-cover ' src="https://plus.unsplash.com/premium_photo-1664537435535-70be4bc69791?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className='h-60  w-11/12 object-cover sm:hidden' src="https://plus.unsplash.com/premium_photo-1681873744238-768e84e2dbfa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img className=' w-11/12 rounded-r-2xl h-60 object-cover sm:hidden ' src="https://plus.unsplash.com/premium_photo-1681873742618-bcb4abbff193?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </section>
    
    </>
  )
}

export default Section


