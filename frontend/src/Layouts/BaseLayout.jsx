import React from  'react';
import {Outlet} from  'react-router-dom';
import TopBar from '../Components/TopBar';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';

const BaseLayout = ()=>{
  const[isFixedClass, setiSFixedClass] = React.useState(false);

  const addFixedClass = ()=> window.pageYOffset > 500 ? setiSFixedClass(true) :setiSFixedClass(false);

  window.addEventListener('scroll', addFixedClass	)
  
  const fixedHeader ={
    position: "fixed",
    top: "120px", 
    left: "901.32px",
    width:"392.688px",
    zIndex: "1000",
  }

 
  return(
    <div className="main relative">

      <header id="main-header" className="fixed top-0 left-0 right-0 z-[100] w-full">
        <TopBar />
        <Navigation />
      </header>

      <div id="wrapper" className='relative w-full pt-36'>

        <Outlet />
        
        <Footer />
      </div>
      
    </div>
  )
}

export default BaseLayout