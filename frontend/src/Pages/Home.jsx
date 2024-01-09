import React from 'react';
import Hero from '../Components/Hero';
import Sidebar from '../Components/Sidebar';
import GeneralStories from '../Components/GeneralStories';
import TopStories from '../Components/TopStories';
import FeaturedPosts from '../Components/FeaturedPosts';
import { Link } from 'react-router-dom';
const Home = ()=>{
   
  return(
    <div className='relative w-full'>
      {/* Hero Slider Start  */}
        <Hero />
      {/* Hero Slider Goes End  */}

      {/* Section Start  */}
      <section className='w-full relative z-10 overflow-hidden py-16'>
        <div className="container max-w-[1140px] w-11/12 mx-auto z-[2] relative">
          <div className='row -mx-4 clear-both table'>

            <div className='w-full lg:w-2/3 relative px-3 float-left'>
              <GeneralStories />
              <TopStories />
              
            </div>

            <div className='w-full lg:w-1/3 sticky top-36  px-3 float-none lg:float-left '>
              <Sidebar />
            </div>
          
          </div>
         
        </div>
      </section>
      <section className=''>
      <div className="container max-w-[1140px] w-11/12 mx-auto z-[2] relative">
        <FeaturedPosts />
      </div>
      <div className='my-10 text-center'>
        <Link to='posts' className='inline-block  h-12 leading-[48px] px-24 text-center bg-primary transition-all duration-100 hover:bg-primary-light rounded font-semibold text-white'>Read All Stories</Link>
      </div>
      </section>
     
      {/* Section End  */}
    </div>
  )
};

export default Home