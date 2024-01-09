import React from 'react';
import {Link} from 'react-router-dom';
import author2 from '../assets/images/author2.png';
const Author = (props)=>{
    return(
        <div className="post-author float-left">
            <Link to="" className="text-black relative">
                <img src= {props.author_avatar} className="author-avatar h-9 w-9 rounded-full mr-2 float-left" />
                <span className="author-name text-[10px] font-bold uppercase relative top-[9px]"> By {props.author_name}</span>
            </Link>
    </div>
    );
};

export default Author 