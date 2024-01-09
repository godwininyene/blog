import React from "react";
import {FaClock} from 'react-icons/fa';
import { Link } from "react-router-dom";

const TopStoriesCard = (post)=>{
    return(
        <div className='flex-shrink-0 w-full lg:w-2/4 relative px-4 mb-5 '>
            <div className="h-full list-post border-b border-b-slate-200 w-full relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-8 before:bg-primary">
                <Link to="" className={`absolute top-0 left-0 z-20 inline-block py-2 px-4 mb-2 rounded transition-all duration-100 hover:bg-primary-light font-semibold uppercase text-[10px]  bg-primary text-white`}>{post.cat}</Link>
                <div className="list-post-media h-[240px] w-full relative overflow-hidden rounded">
                    <Link to={`posts/${post.post_id}`} className="relative">
                        <img src={post.imageUrl} className="w-full h-full object-cover" />
                    </Link> 
                </div>
                <div className="list-post-content pt-3">
                    <h3 className="font-extrabold text-lg text-left transition-all duration-300 hover:text-primary ">
                    <Link to={`posts/${post.post_id}`} className="" >{post.title}</Link>
                    </h3>
                    <span className="post-date w-full text-left text-[10px] font-black uppercase text-[#666]  mt-1 mb-3 flex items-center">
                        <FaClock  className="mr-1  text-primary "/>
                        {post.post_date}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TopStoriesCard