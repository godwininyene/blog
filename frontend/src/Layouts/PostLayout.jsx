import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

const PostLayout = () => {
  return (
    <div className='content w-full bg-white relative z-[13]'>
        {/* Section Start  */}
        <section className='w-full relative z-10 overflow-hidden py-16'>
            <div className="container max-w-[1140px] w-11/12 mx-auto z-[2] relative">
                <div className='row -mx-4'>
                <div className=' w-full lg:w-2/3 relative px-4  float-left'>
                    
                    <Outlet />
                </div>
                <div className='w-full lg:w-1/3 relative  px-3 float-none lg:float-left'>
                   <Sidebar />
                </div>
                </div>
            </div>
        </section>
        {/* Section End  */}

    </div>
  )
}

export default PostLayout