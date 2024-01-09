import React from 'react';
import banner from '../assets/images/banner.jpg';
import FeaturedPostsCard from './FeaturedPostsCard';


import { posts } from '../Data/data';
import SectionTitle from '../Components/SectionTitle';

const FeaturedPosts = ()=>{

    return(
        <div className="w-full relative mb-5">
            <SectionTitle title="Featured Opinions" desc="Stay up-to date with relevant opinions." />

            <div className='mb-12 flex flex-col lg:flex-row gap-x-6'>

                {
                    (posts.length > 0)?(
                        posts.slice(0,3).map(post=>(
                            <FeaturedPostsCard post={post} key={post.post_id}/>
                        ))
                    ):<h1 className="text-2xl mb-4 font-bold">No Post at the moment. Please check back later.</h1>
                }
            </div>

            {/* Add Banner Appear here.  */}
            <div className="add-space max-w-[860px] mx-auto">
                <img src={banner} className="ad-banner w-full h-auto" />
            </div>
        </div>
    );
};

export default FeaturedPosts