import React from 'react'
import bgImg3 from '../assets/images/bg-3.jpg';

const About = () => {
  return (
    <section className='w-full relative z-10 overflow-hidden py-16'>
      <div className="container max-w-[1140px] w-11/12 mx-auto z-[2] relative">
        <div className='row -mx-4 clear-both table'>


          <div className='w-full lg:w-5/12 relative px-3 float-left'>
           
            <div className="section-title mb-10 pb-5 border-b border-b-slate-300 relative before:absolute before:-bottom-[1px] before:left-0 before:w-20 before:h-[1px] before:bg-primary">
                <h2 className="font-bold text-2xl text-dark">Gereal Studio Story</h2>
                <h4 className="text-sm font-semibold mt-1 text-slate-500">Meet us</h4>
            </div>

            <div className="about-wrap">  
              <p className="text-sm font-medium pb-3 text-slate-600">
                Aliquam luctus tempor orci sit amet finibus. Duis porttitor, 
                ex ac molestie consectetur, metus tellus venenatis velit, et interdum enim lorem a purus.
                Fusce scelerisque, massa vitae rhoncus elementum, enim acinia pharetra?
              </p>

              <p className="text-sm font-medium pb-3 text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin ornare sem sed quam tempus aliquet vitae eget dolor. 
                Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. 
                Suspendisse id neque a nibh mollis blandit.
                Quisque varius eros ac purus dignissim. Proin eu ultrices libero.
              </p>
            </div>
          </div>

          <div className='w-full lg:w-[55%] relative  px-3 float-none lg:float-left'>
            <div className="about-img w-full float-left relative pl-10">
              <img src={bgImg3} className="w-full h-auto object-cover rounded" />
            </div>
          </div>
        
        </div>
        
      </div>
   </section>
  )
}

export default About