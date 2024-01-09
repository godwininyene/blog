import React from 'react';
import{useParams} from 'react-router-dom';
import { posts } from '../Data/data';
import GeneralStoriesCard from '../Components/GeneralStoriesCard';

const Category = () => {
    const{cat_title} = useParams();
    const category_posts = cat_title ? posts.filter(post => post.cat.toLocaleLowerCase()== cat_title.toLocaleLowerCase().split("-").join(" ")) : null;
  return (
    <div>
        {
            (category_posts.length > 0)?(
                category_posts.map(post=>(
                    <GeneralStoriesCard post={post} key={post.post_id}/>
                ))
            ):<h1 className="text-2xl mb-4 font-bold">No Post found for this category at the moment. Please check back later.</h1>
        }
    </div>
  )
}

export default Category