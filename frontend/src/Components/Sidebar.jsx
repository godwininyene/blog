import React from 'react';
import { Link } from 'react-router-dom';
import { FaCaretRight, FaClock,FaComments,  FaEye,FaFacebookF,FaTwitter,FaInstagram,FaYoutube} from 'react-icons/fa';
import author3 from '../assets/images/author3.jpg';
import author2 from '../assets/images/author2.png';
import banner from '../assets/images/banner.jpg';
import { categories } from '../Data/data';
import SidebarPost from './SidebarPost';


const Sidebar = () => {
  return (
    <div className='sidebar-content  h-full border-l border-l-slate-200 sticky top-3'>

      {/* Popular news  Widget Start */}
      <div className='box-widget w-full relative mb-10 pl-0 lg:pl-8 clear-both table'>
        <div className="box-widget-content">
          <div className='content-tab  rounded-t overflow-hidden border border-slate-200'>
            <span className='text-white text-center bg-primary py-4 w-full uppercase text-xs font-semibold inline-block'>Popular News</span>
          </div>
          <div className='post-widget-container py-6 px-5 border border-slate-200 border-t-0 bg-[#f9f9f9] clear-both table'>
           <SidebarPost />
           <SidebarPost />
           <SidebarPost />
           <SidebarPost />
          </div>
        </div>
      </div>
      {/* Popular news  Widget End */}

      {/* Ad  Widget Start */}
      <div className='box-widget w-full relative mb-10 pl-0 lg:pl-8'>
        <div className="box-widget-content">
         <img src={banner} alt="" className='w-full' />
        </div>
      </div>
      {/* Ad  Widget End */}

      {/* Recent news Widget Start */}
      <div className='box-widget w-full relative mb-10 pl-0 lg:pl-8 clear-both table'>
        <div className="box-widget-content ">

          <div className='content-tab  rounded-t overflow-hidden border border-slate-200'>
              <span className='text-white text-center bg-dark py-4 w-full uppercase text-xs font-semibold inline-block'>Recent News</span>
          </div>
          <div className='post-widget-container py-6 px-5 border border-slate-200 border-t-0 bg-[#f9f9f9] clear-both table'>
           
           <SidebarPost />
           <SidebarPost />
           <SidebarPost />
           <SidebarPost />

          </div>
        </div>
      </div>
      {/* Recent news Widget End */}

      {/* Categoreies Start */}
      <div className='box-widget w-full relative mb-10 pl-0 lg:pl-8 clear-both table'>
        <div className="box-widget-content">
          <div className='content-tab  rounded-t overflow-hidden border border-slate-200'>
            <span className='text-white text-center bg-primary py-4 w-full uppercase text-xs font-semibold inline-block'>Categories</span>
          </div>

          <div className='post-widget-container py-6 px-5 border border-slate-200 border-t-0 bg-[#f9f9f9] clear-both table'>
            <ul className="flex gap-x-2 ml-5 lg:ml-auto items-center flex-wrap">
              {
                categories.map(cat=>(
                  <li key={cat.cat_id}>
                    <Link to={`/posts/category/${cat.cat_title}`} className={`inline-block py-2 px-3 mb-2 rounded font-semibold uppercase text-[10px] transition-all duration-100 hover:bg-primary-light bg-dark text-white`}>{cat.cat_title}</Link>
                </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      {/* Categoreies End */}

      {/* Social Media Widget Start */}
      <div className='box-widget w-full relative mb-10 pl-0 lg:pl-8 clear-both table'>
        <div className="box-widget-content">

          <div className='content-tab  rounded-t overflow-hidden border border-slate-200'>
            <span className='text-white text-center bg-dark py-4 w-full uppercase text-xs font-semibold inline-block'>Follow Us</span>
          </div>

          <div className="social-widget mt-5">
            
            <Link to="" className="relative block float-left w-[48%] mr-[2%] mb-[2%] rounded-sm  bg-[#f5f5f5] border border-slate-300 py-2 pr-1 pl-16">
              <FaFacebookF className="inline-block absolute h-10 w-10 leading-10 bg-white left-2 top-2/4 -mt-5 text-[#3C579C] text-base p-2"/>
              <span className="font-semibold block">Facebook</span>
              <span className="font-semibold text-[#6c757d]">Like</span>
            </Link>

            <Link to="" className="relative block float-left w-[48%] mr-[2%] mb-[2%] rounded-sm  bg-[#f5f5f5] border border-slate-300 py-2 pr-1 pl-16">
              <FaTwitter className="inline-block absolute h-10 w-10 leading-10 bg-white left-2 top-2/4 -mt-5 text-[#3C579C] text-base p-2"/>
              <span className="font-semibold block">Twitter</span>
              <span className="font-semibold text-[#6c757d]">Follow</span>
            </Link>

            <Link to="" className="relative block float-left w-[48%] mr-[2%] mb-[2%] rounded-sm  bg-[#f5f5f5] border border-slate-300 py-2 pr-1 pl-16">
              <FaInstagram className="inline-block absolute h-10 w-10 leading-10 bg-white left-2 top-2/4 -mt-5 text-[#3C579C] text-base p-2"/>
              <span className="font-semibold block">Instagram</span>
              <span className="font-semibold text-[#6c757d]">Follow</span>
            </Link>

            <Link to="" className="relative block float-left w-[48%] mr-[2%] mb-[2%] rounded-sm  bg-[#f5f5f5] border border-slate-300 py-2 pr-1 pl-16">
              <FaYoutube className="inline-block absolute h-10 w-10 leading-10 bg-white left-2 top-2/4 -mt-5 text-[#3C579C] text-base p-2"/>
              <span className="font-semibold block">Youtube</span>
              <span className="font-semibold text-[#6c757d]">Subscribe</span>
            </Link>

          </div>


        </div>
      </div>
      {/* Social Media Widget End */}


      {/* Subscription Widget Start */}
      <div className='box-widget w-full relative mb-10 pl-0 lg:pl-8'>
        <div className="box-widget-content">

          <div className='content-tab  rounded-t overflow-hidden border border-slate-200'>
            <span className='text-white text-center bg-primary py-4 w-full uppercase text-xs font-semibold inline-block'>Subscribe to our newsletter</span>
          </div>

          <div className="cta-widget">

          {/* <h3 className='text-left font-semibold  mb-5 pb-5 border-b border-b-slate-300'>Subscribe</h3> */}
            <div className='subscriber-form-group mb-3'>
              <p className='text-xs leading-6  text-left'>     
                Want to be notified when we launch a new template or an udpate.
                Just sign up and we'll send you a notification by email.
              </p>
              <form action="" className='mt-5'>
                <div className='flex gap-x-2'>
                  <input 
                    type="email" 
                    name='email' 
                    placeholder='Enter your Email'
                    className='h-12 px-5 bg- bg-gray-800 transition-all duration-300 focus:outline-0 border border-transparent focus:border-primary text-white w-9/12 rounded'
                  />
                  <button className='transition-all duration-100 hover:bg-primary-light bg-primary rounded cursor-pointer text-white h-12 w-1/4'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Subscription Widget End */}
    </div>
  )
}

export default Sidebar