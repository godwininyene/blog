import React from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import { posts, categories } from '../Data/data';

import banner from '../assets/images/banner.jpg';
import SectionTitle from '../Components/SectionTitle';
import GeneralStoriesCard from '../Components/GeneralStoriesCard';
import {FaClock, FaComments, FaEye} from 'react-icons/fa';
const GeneralStories = ()=>{

    const[searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("category");
 
  
    const displayPosts = typeFilter ? posts.filter(post => post.cat == typeFilter) : posts; 
    return (
        <div className="general-stories-section w-full relative mb-5">
            {/* Add Banner Appear here.  */}
            <div className="add-space mb-6">
                        <img src={banner} className="ad-banner w-full h-auto" />
                    </div>
            <SectionTitle title='General World News' desc='Stay up to date with happenings round the world'>
                <div className="categories mt-8 lg:mt-0 mb-5 lg:mb-0 rounded border border-slate-100 bg-slate-100 overflow-hidden ">
                    <ul className="flex flex-wrap">
                        <li >
                            <Link to='..'
                                className={`inline-block py-2 px-3 font-semibold uppercase transition-all duration-100 hover:bg-primary-light hover:text-white text-[10px] ${typeFilter == null ? 'bg-primary text-white': null}`}>
                                All
                            </Link>
                        </li>
                       {
                        categories.map(category =>(
                            <li key={category.cat_id}>
                                <button 
                                    onClick={()=>setSearchParams({category: category.cat_title})} 
                                    className={`inline-block py-2 px-3 font-semibold uppercase transition-all duration-100 hover:bg-primary-light hover:text-white text-[10px] ${typeFilter == category.cat_title ? 'bg-primary text-white' : null}  `}>
                                    {category.cat_title}
                                </button>
                            </li>
                        ))
                       }
                    </ul>
                </div>
            </SectionTitle>
            
            <div className="section-content-wrapper w-full relative">
                <div className="loader">
                    Loading...
                </div>

                <div className="posts-container py-3 overflow-hidden h-auto min-h-[450px]">

                   {
                    (displayPosts.length > 0)?(
                        displayPosts.slice(0,4).map(post=>(
                            <GeneralStoriesCard post={post} key={post.post_id}/>
                        ))
                    ):<h1 className="text-2xl mb-4 font-bold">No Post at the moment. Please check back later.</h1>
                   }
                   {/* Add Banner Appear here.  */}
                    <div className="add-space">
                        <img src={banner} className="ad-banner w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralStories