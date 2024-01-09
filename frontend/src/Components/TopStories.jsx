import React from  'react';
import{Link} from 'react-router-dom';
import {FaClock} from 'react-icons/fa';
import { posts } from '../Data/data';
import SectionTitle from '../Components/SectionTitle';
import TopStoriesCard from './TopStoriesCard';

const TopStories = ()=>{
  
    return(
        <div className="section-top-stories w-full relative mb-5">
            <SectionTitle title="Top Stories" desc="Don't miss daily news" />
            <div className='row -mx-4 relative flex flex-wrap'>
            {
                (posts.length > 0)?(
                    posts.slice(0,4).map(post=>(
                    <TopStoriesCard {...post} key={post.post_id} className="bg-red-700"/>
                    ))
                ):<h1 className="text-2xl mb-4 font-bold">No Top stories at the moment. Please check back later.</h1>
            }
            </div>
        </div>
    )
}

export default TopStories