import React from 'react'
import { useParams, Link} from 'react-router-dom'
import{posts} from '../Data/data';
import author2 from '../assets/images/author2.png';
import author1 from '../assets/images/author1.png';
import Author from '../Components/Author';
import GeneralStoriesCard from '../Components/GeneralStoriesCard';
import {FaClock, FaComments, FaEye, FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaReply} from 'react-icons/fa';
import banner from '../assets/images/banner.jpg';

const PostDetail = () => {
    const {id} = useParams();
    const post = id ? posts.find(post => post.post_id == id) : null;
   const styles ={
      zIndex:"1000",
      position:"fixed",
      top:"90px",
      marginLeft:"0",
      width:"63.9px",
      left:"53.9px"
   }
   
  return (
    <div className="float-left w-full relative">

      {/* Single Post Header Start */}
      <div className="sing-post-header pb-8 relative w-full float-left clear-both table">
        <Link to="" className={`inline-block py-2 px-3 mb-2 rounded font-semibold uppercase text-[10px] transition-all duration-100 hover:bg-primary-light bg-primary text-white`}>Business</Link>
        <h1 className="font-bold text-xl lg:text-3xl text-left mb-5 ">
          Innovations that Bring Pleasure to All Peoples
        </h1>
        {/* Post Author */}
        <Author author_avatar={author2} author_name={'Godwin Inyene'} />

        <span className="post-date text-left text-[10px] font-black uppercase text-[#666]  inline-block mt-4 ml-5 float-left">
          <FaClock  className="mr-1  text-primary inline"/>
            15 June 2023
        </span>

        <ul className="float-right bg-[#f9f9f9] border border-slate-100 py-2 pr-3 pl-1 w-full lg:w-auto mt-3 lg:mt-0 flex justify-center lg:block ">
          <li className="ml-3 text-xs font-semibold uppercase flex items-center float-left">
            <FaComments  className="inline mr-1 font-extrabold text-primary "/>
            235
          </li>
          <li className="ml-3 text-xs font-semibold uppercase flex items-center float-left">
            <FaEye  className="inline mr-1 font-extrabold text-primary"/>
            33555
          </li>
        </ul>
      </div>
      {/* Single Post Header End */}

      {/* Add Banner Appear here.  */}
      {/* <div className="add-space my-5">
        <img src={banner} className="ad-banner w-full h-auto" />
      </div> */}

      {/* Single Post Media Start */}
      <div className="single-post-media w-full relative float-left mb-5">
        <img src={author1} className="w-[80%] object-cover mx-auto lg:mx-0" />
      </div>
      {/* Single Post Media End */}

      {/* Single Post Content Start */}
      <div className="single-post-content w-full relative float-left mb-5">
        {/* Will add some styles here upon scroll */}
        <div className="absolute top-0 z-auto bg-red-700">ej</div>


        <p className="max-w-full mb-2 font-normal text-black text-left text-sm">
          However, to get the best of AIHS 2023, you must secure your access pass, this is to ensure that
          you benefit from the various activities therein.
        </p>

        <p className="max-w-full mb-2 font-normal text-black text-left text-sm">

          AIHS offers an opportunity to meet new people while also strengthening existing relationships. 
          If you know of anyone who will be attending and would love to reconnect or connect with, or get to know better, beat exhibitors, clients, or business associates, reach out now before the event to set up a
         time to meet for coffee or a meal while you’re there. This will go a long way.
        </p>

         <p className="max-w-full mb-2 font-normal text-black text-left text-sm">

          AIHS offers an opportunity to meet new people while also strengthening existing relationships. 
          If you know of anyone who will be attending and would love to reconnect or connect with, or get to know better, beat exhibitors, clients, or business associates, reach out now before the event to set up a
         time to meet for coffee or a meal while you’re there. This will go a long way.
        </p>

         <p className="max-w-full mb-2 font-normal text-black text-left text-sm">

          AIHS offers an opportunity to meet new people while also strengthening existing relationships. 
          If you know of anyone who will be attending and would love to reconnect or connect with, or get to know better, beat exhibitors, clients, or business associates, reach out now before the event to set up a
         time to meet for coffee or a meal while you’re there. This will go a long way.
        </p>

         <p className="max-w-full mb-2 font-normal text-black text-left text-sm">

          AIHS offers an opportunity to meet new people while also strengthening existing relationships. 
          If you know of anyone who will be attending and would love to reconnect or connect with, or get to know better, beat exhibitors, clients, or business associates, reach out now before the event to set up a
         time to meet for coffee or a meal while you’re there. This will go a long way.
        </p>
      </div>
      {/* Single Post Content End */}

      {/* Single Post Comment Start */}
      <div className="comments w-full relative float-left mt-5">

        <div className="title text-lg text-left relative w-full font-semibold text-black mb-7 before:absolute before:right-0 before:top-2/4 before:w-[70%] before:h-[1px] before:bg-[#eee] before:z-[1]         after:absolute after:right-0 after:top-2/4 after:w-[50px] after:h-[1px] after:bg-primary after:z-[2]">
          Comments 
           <span className="text-primary">  3</span>
        </div>

        <ul className="commentlist clear-both table w-full relative">

          <li className="comment lg:pb-7 lg:pl-24 float-left relative mb-10 w-full border-b border-b-[#eee]">

            <div className="comment-author absolute top-5 left-[30px] w-10 h-10  lg:top-0 lg:left-4 lg:w-20 lg:h-20 z-[20]">
              <img src={author1} className="h-10 w-10 lg:h-14 lg:w-14 rounded-full float-left"/>
            </div>
            
            <div className="comment-body float-left w-full relative py-6 px-8 bg-[#f9f9f9] rounded-sm border border-[#eee]">
              <h4 className="author-name text-base font-bold mb-3 ml-12 lg:ml-0 float-left">Godwin Inyene</h4>
              <div className='clear-both table'></div>
              <p>
                lorem ipsum dolor sit amet, con lorem loieia aiijefueu euuaeuao euuuey eoiir
              </p>

              <div className='flex mt-10 relative'>
                <div className="comment-meta">
                  <FaClock  className="inline mr-1  text-primary "/>
                  January 02, 2020
                </div>

                <div className='hidden lg:block h-[1px] bg-[#d9d9d9] w-[300px] absolute left-[180px] right-[150px] bottom-[1rem]'></div>

                <div className="text-end flex-grow">
                  <a href="" className='inline-block py-2 px-5 bg-[#292929] font-medium text-[10px] rounded-sm text-white'>
                    <FaReply  className="inline mr-1  text-primary "/>
                    Reply
                  </a>
                </div>
              </div>
              
            </div>
          </li>
        </ul>

      </div>
      {/* Single Post Comment End */}

      {/* Add Banner Appear here.  */}
      {/* <div className="add-space my-5">
        <img src={banner} className="ad-banner w-full h-auto" />
      </div> */}

      {/* CTA Start */}
      {/* <div className="my-10 text-center">
        <span className="text-lg inline-block mb-2">Share this article</span>
        <ul className="flex gap-x-2 ml-5 lg:ml-auto items-center justify-center">
          <li>
              <a href="" className="transition-all duration-100 bg-primary hover:bg-primary-light text-xs inline-block text-center w-8 h-8 leading-8 text-white rounded">
                  <FaFacebookF className="inline"/>
              </a>
          </li>
          <li>
              <a href="" className="transition-all duration-100 bg-primary hover:bg-primary-light text-xs inline-block text-center w-8 h-8 leading-8 text-white rounded">
                  <FaTwitter className="inline"/>
              </a>
          </li>
          <li>
              <a href="" className="transition-all duration-100 bg-primary hover:bg-primary-light text-xs inline-block text-center w-8 h-8 leading-8 text-white rounded">
                  <FaInstagram className="inline"/>
              </a>
          </li>
          <li>
              <a href="" className="transition-all duration-100 bg-primary hover:bg-primary-light text-xs inline-block text-center w-8 h-8 leading-8 text-white rounded">
                  <FaPinterestP className="inline"/>
              </a>
          </li>
        </ul>
      </div> */}
      {/* CTA End */}

      {/* Comment form  Start */}
      {/* <div className="w-full lg:w-2/4 mx-auto mb-10">
        <form action="" method="" enctype="multipart/form-data">
          <span className="italic inline-block mb-3 font-semibold">Leave A comment</span>

          <div className="mb-3">
            <input type="text" placeholder="Enter your name" name="name" className="inline-block w-full px-4 py-3 bg-[#f0f0f0] border border-transparent rounded transition-all duration-100 focus:outline-0 focus:border-primary"/>
          </div>

          <div className="mb-3">
            <input type="email" placeholder="Enter your email" name="email" className="inline-block w-full px-4 py-3 bg-[#f0f0f0] border border-transparent rounded transition-all duration-100 focus:outline-0 focus:border-primary"/>
          </div>

          <div className="mb-3">
            <textarea type="text" placeholder="Enter your comment" name="comment" className="inline-block w-full h-32 px-4 py-3 bg-[#f0f0f0] border border-transparent rounded transition-all duration-100 focus:outline-0 focus:border-primary"/>
          </div>

          <div className="mb-3 text-center">
            <button className='transition-all duration-100 hover:bg-primary-light bg-primary rounded cursor-pointer text-white h-12  px-10'>Submit</button>
          </div>
        </form>
      </div> */}
      {/* Comment form  End */}

      {/* Related Stories Start */}
      {/* <div className="">
        <div className='content-tab  rounded-t my-5 border border-slate-200'>
          <span className='text-white text-center bg-dark py-4 w-full uppercase text-lg font-semibold inline-block'>Related Stories</span>
        </div>
        {
          (posts.length > 0)?(
              posts.map(post=>(
                  <GeneralStoriesCard post={post} key={post.post_id}/>
              ))
          ):<h1 className="text-2xl mb-4 font-bold">No Post at the moment. Please check back later.</h1>
        }
      </div> */}
      {/* Related Stories End */}





    </div>
  )
}

export default PostDetail