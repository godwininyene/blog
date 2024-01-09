import React from 'react';
import logo from '../assets/images/logo.png';
import {NavLink} from 'react-router-dom';
import { categories } from '../Data/data';
const Navigation = ()=>{
    const activeStyle={color:'rgb(148, 163, 184 )', borderBottomColor:'#228B22'};

    const modifyUrlString = (UrlString)=>{
        const modify_url =  UrlString.split(" ").join("-")
        return modify_url;
    }
    
    return(
        <div className="bg-white shadow-sm border-b border-b-white  relative">
            <div className="container max-w-[1140px] w-11/12 mx-auto z-[2] relative">

                <div className='row flex items-center gap-x-5 py-3'>
                
                    <div className="logo">
                        <a href="" className="flex items-center font-semibold">
                            <img src={logo} className='w-auto h-14 inline-block mr-1'/>
                            <span className="text-2xl">Gereal Studio</span>
                        </a>
                    </div>
                    <div className=''>
                        <input type="text" placeholder='Search' className='w-full h-12 px-5 bg-  bg-slate-100 transition-all duration-300 focus:outline-0 border border-transparent focus:border-primary   rounded' />
                    </div>
                    <div  className="ml-auto hidden lg:block">
                        <nav className="flex items-center gap-x-4 list-none">
                            <li className=' transition-all duration-200 '>
                                <NavLink to='/' className={`border-b uppercase  border-b-transparent hover:border-b-primary pb-2 font-bold text-xs hover:text-slate-400 transition-all duration-300`} style={({isActive})=> isActive ? activeStyle : null}>Home </NavLink>
                            </li>
                            <li className=' transition-all duration-200 '>
                                <NavLink to='about' className={`border-b uppercase  border-b-transparent hover:border-b-primary pb-2 font-bold text-xs hover:text-slate-400 transition-all duration-300`} style={({isActive})=> isActive ? activeStyle : null}>About </NavLink>
                            </li>
                            <li className=' transition-all duration-200 '>
                                <NavLink to='contact' className={`border-b uppercase  border-b-transparent hover:border-b-primary pb-2 font-bold text-xs hover:text-slate-400 transition-all duration-300`} style={({isActive})=> isActive ? activeStyle : null}>Contact</NavLink>
                            </li>

                            {
                                categories.map(cat=>(
                                    <li key={cat.cat_id}className='transition-all duration-200 '>
                                        <NavLink to={`posts/category/${modifyUrlString(cat.cat_title)}`} className="border-b pb-2 uppercase text-dark font-bold text-xs border-b-transparent hover:border-b-primary  hover:text-slate-400 transition-all duration-300" style={({isActive})=> isActive ? activeStyle : null}>{cat.cat_title}</NavLink>
                                    </li>
                                ))
                            }
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation