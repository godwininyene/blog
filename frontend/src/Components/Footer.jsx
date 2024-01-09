import React from 'react';
import logo from '../assets/images/logo.png';
import {FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaCaretRight, FaCaretUp} from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { categories } from '../Data/data';

const Footer = () => {
  return (
    <footer className='bg-dark pt-20'>
        <div className="max-w-[1140px] w-11/12 mx-auto">
            <div className="row  flex flex-col lg:flex-row  ">

                {/* About Start */}
                <div className='w-full lg:w-1/3 px-4 flex-shrink-0'>
                    <div className='content mb-4 lg:mb-0'>
                        <a href="" className='block text-left mb-6'>
                            <img src={logo} className='w-auto h-24 inline'/>
                        </a>
                        <p className='text-xs leading-6 text-white text-left'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Eaque ipsa quae ab illo inventore veritatis et quasi architecto.
                        </p>
                        <div className='mt-6'>
                            <ul className="flex gap-x-2 ml-auto items-center">
                                <li>
                                    <a href="" className="bg-primary text-xs inline-block text-center w-8 h-8 leading-8 text-white rounded transition-all duration-100 hover:bg-primary-light">
                                        <FaFacebookF className="inline"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="bg-primary text-xs inline-block text-center w-8 h-8 leading-8 text-white rounded transition-all duration-100 hover:bg-primary-light">
                                        <FaTwitter className="inline"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="bg-primary text-xs inline-block text-center w-8 h-8 leading-8 text-white rounded transition-all duration-100 hover:bg-primary-light">
                                        <FaInstagram className="inline"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="bg-primary text-xs inline-block text-center w-8 h-8 leading-8 text-white rounded transition-all duration-100 hover:bg-primary-light">
                                        <FaPinterestP className="inline"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* About End */}

                {/* Categoreies Start */}
                <div className='px-4 w-full lg:w-1/6 flex-shrink-0'>
                    <div className='content mb-4 lg:mb-0'>
                        <h3 className='text-left font-semibold text-white mb-5 pb-5 border-b border-b-slate-200'>Categories</h3>
                        <nav className='footer-nav'>
                            <ul className='footer-nav-list list-none'>
                            {
                                categories.map(cat=>(
                                    <li key={cat.cat_id} className='text-left mb-3 pl-5 text-sm font-semibold relative group'>
                                         <FaCaretRight className='text-primary absolute left-0 top-[4px] transition-all duration-300 ease-linear group-hover:left-[4px]' />
                                        <NavLink to={`posts/category/${cat.cat_title}`} className="text-[#B6B6B6] transition-all duration-300 hover:text-slate-100">{cat.cat_title}</NavLink>
                                    </li>
                                ))
                            }
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* Categoreies End */}

                {/* Quick Links Start */}
                <div className='px-4 w-full lg:w-1/6 flex-shrink-0'>
                    <div className='content mb-4 lg:mb-0'>
                        <h3 className='text-left font-semibold text-white mb-5 pb-5 border-b border-b-slate-200'>Quick Links</h3>
                        <nav className='footer-nav'>
                            <ul className='footer-nav-list list-none'>
                                <li className='text-left mb-3 pl-5 text-sm font-semibold relative group'>
                                    <FaCaretRight className='text-primary absolute left-0 top-[4px] transition-all duration-300 ease-linear group-hover:left-[4px]' />
                                    <NavLink to="/"className="text-[#B6B6B6] transition-all duration-300 hover:text-slate-100">Home</NavLink>
                                </li>
                                <li className='text-left mb-3 pl-5 text-sm font-semibold relative group'>
                                    <FaCaretRight className='text-primary absolute left-0 top-[4px] transition-all duration-300 ease-linear group-hover:left-[4px]' />
                                    <NavLink to="about" className="text-[#B6B6B6] transition-all duration-300 hover:text-slate-100">About</NavLink>
                                </li>
                                <li className='text-left mb-3 pl-5 text-sm font-semibold relative group'>
                                    <FaCaretRight className='text-primary absolute left-0 top-[4px] transition-all duration-300 ease-linear group-hover:left-[4px]' />
                                    <NavLink to="contact" className="text-[#B6B6B6] transition-all duration-300 hover:text-slate-100">Contact</NavLink>
                                </li>
                                <li className='text-left mb-3 pl-5 text-sm font-semibold relative group'>
                                    <FaCaretRight className='text-primary absolute left-0 top-[4px] transition-all duration-300 ease-linear group-hover:left-[4px]' />
                                    <NavLink className="text-[#B6B6B6] transition-all duration-300 hover:text-slate-100">Privacy Policy</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* Quick Links End */}

                {/* CTA Start */}
                <div className='w-full lg:w-1/3 px-4  flex-shrink-0'>
                    <div className='content mb-4 lg:mb-0'>
                        <h3 className='text-left font-semibold text-white mb-5 pb-5 border-b border-b-slate-200'>Subscribe</h3>
                        <div className='subscriber-form-group mb-3'>
                            <p className='text-xs leading-6 text-white text-left'>     
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
                {/* CTA End */}
            </div>
        </div>

        <div className='footer-bottom py-5 mt-16 bg-[#191919]'>
            
            <div className="max-w-[1300px] w-11/12 mx-auto">

                <div className="row flex flex-col lg:flex-row items-center justify-between">
                    <div className='copy-right font-medium text-[#999] text-left text-xs w-full lg:w-auto'>
                        <span className='text-primary'>&copy; Gereal Technology 2023 </span>
                        . All Right Reserved.
                    </div>
                    
                    <div className="w-full lg:w-auto text-right">

                        <div className='inline-block text-center bg-primary w-9 h-9 leading-9 rounded text-white'>
                            <FaCaretUp className='inline' />
                        </div>
                    </div>
                    <div className='w-full lg:w-auto'>
                        <ul className='list-none flex gap-x-2'>
                            <li className=''>
                                <Link to='' className='text-white text-xs'>Terms & Conditions</Link>
                            </li>
                            <li className=''>
                                <Link to='' className='text-white text-xs'>Privacy Policy</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer