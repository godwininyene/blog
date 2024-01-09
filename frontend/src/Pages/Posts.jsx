import React from 'react'
import { posts } from '../Data/data';
import {Link, useSearchParams} from 'react-router-dom';

import GeneralStoriesCard from '../Components/GeneralStoriesCard';


const Posts = () => {
    const[searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("category");
    const displayPosts = typeFilter ? posts.filter(post => post.cat == typeFilter) : posts; 
  return (
    <div>
        {
            (displayPosts.length > 0)?(
                displayPosts.map(post=>(
                    <GeneralStoriesCard post={post} key={post.post_id}/>
                ))
            ):<h1 className="text-2xl mb-4 font-bold">No Post at the moment. Please check back later.</h1>
        }
    </div>
  )
}

export default Posts