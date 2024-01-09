import React from 'react';
import { Link } from 'react-router-dom';
import { FaCaretRight, FaClock,FaComments,  FaEye } from 'react-icons/fa';
import author3 from '../assets/images/author3.jpg';
import author2 from '../assets/images/author2.png';
const SidebarPost = ()=>{

    return(
        <div className='post-widget border-t border-t-slate-300 mb-5 float-left w-full relative pt-3'>

        <div className='post-media w-[30%] float-left overflow-hidden rounded'>
          <Link to="" className="relative block group">
            <img src={author3} className="w-full h-full object-cover" />
              <span className='inline-block w-full h-full absolute top-0 left-0 bottom-0 right-0 z-[2] transition-all duration-200 ease-linear opacity-0 bg-[rgba(0,0,0,0.5)] group-hover:opacity-100'>
                  &nbsp;
              </span>
            <span className='inline-block text-center text-white h-10 w-10 leading-10 rounded-full absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 z-[3] bg-primary transition-all duration-200 ease-linear opacity-0 group-hover:opacity-100' style={{boxShadow: '0px 0px 0px 4px rgba(255,255,255,0.4)'}}>
                <FaCaretRight className='inline'/>
            </span>
          </Link>
        </div>

        <div className='post-content float-left w-[70%] pt-2 pl-3'>
          <h3 className="font-semibold text-xs text-left transition-all duration-300 hover:text-primary pb-1">
            <Link to="" className="" >How to start Home education.</Link>
          </h3>

          <ul>
            <li className='float-left mr-2 text-[10px] font-medium uppercase text-slate-400'>
              <span className="flex items-center">
                <FaClock  className="mr-1 text-primary"/>
                25 may 2023
              </span>
            </li>

            <li className='float-left mr-2 text-[10px] font-medium uppercase text-slate-400'>
              <span className="flex items-center">
                <FaComments  className="mr-1 text-primary"/>
                25
              </span>
            </li>

            <li className='float-left mr-2 text-[10px] font-medium uppercase text-slate-400'>
              <span className="flex items-center">
                <FaEye  className="mr-1 text-primary"/>
                  845
              </span>
            </li>
          </ul>
        </div>
       </div>
    )
}

export default SidebarPost