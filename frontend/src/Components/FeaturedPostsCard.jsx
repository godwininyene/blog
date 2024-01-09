import React from 'react'
import {FaCaretRight,FaClock} from 'react-icons/fa'
import {Link} from 'react-router-dom';

const FeaturedPostsCard = ({post}) => {
  return (
    <div className='flex-shrink-0 w-full lg:w-2/6  w-relative mb-5'>

      <div className="post-media group relative w-full  mb-5 lg:mb-0 h-[190px] overflow-hidden rounded">
          <Link to={`posts/${post.post_id}`} className="relative ">
              <img src={post.imageUrl} className="w-full h-full object-cover" />
              <span className='inline-block w-full h-full absolute top-0 left-0 bottom-0 right-0 z-[2] transition-all duration-200 ease-linear opacity-0 bg-[rgba(0,0,0,0.5)] group-hover:opacity-100'>
                  &nbsp;
              </span>
              <span className='inline-block text-center text-white h-10 w-10 leading-10 rounded-full absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 z-[3] bg-primary transition-all duration-200 ease-linear opacity-0 group-hover:opacity-100' style={{boxShadow: '0px 0px 0px 4px rgba(255,255,255,0.4)'}}>
                  <FaCaretRight className='inline'/>
              </span>
          </Link>
      </div>

      <div className="post-content mt-3 relative  w-full ">
          
          <Link to="" className={`inline-block py-2 px-3 mb-2 rounded font-semibold uppercase text-[10px] transition-all duration-100 hover:bg-primary-light bg-primary text-white`}>{post.cat}</Link>
          <h3 className="font-extrabold text-lg text-left transition-all duration-300 hover:text-primary">
             <Link to={`posts/${post.post_id}`} className="" >{post.title}</Link>
          </h3>
          <span className="post-date w-full text-left text-[10px] font-black uppercase text-[#666]  mt-1 mb-3 flex items-center">
              <FaClock  className="mr-1  text-primary "/>
              {post.post_date}
          </span>
          <p className="text-left text-xs leading-6 pb-3 font-semibold text-slate-500">
              {post.body}
          </p>
      </div>

    </div>
  )
}

export default FeaturedPostsCard