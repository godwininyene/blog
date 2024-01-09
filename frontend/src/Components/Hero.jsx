import React from 'react'
import { Link } from 'react-router-dom';
import { posts } from '../Data/data';
import {FaCaretLeft, FaCaretRight} from 'react-icons/fa'

const Hero = () => {
   
   const [index, setIndex] = React.useState(0);
   const [sw, setSw] = React.useState(1);
   const numSlides = posts.slice(0,3).length - 1;
   const timeoutRef = React.useRef(null);
   const delay = 3500;

   const resetTimeout = ()=>{
    if(timeoutRef.current){
        clearTimeout(timeoutRef.current);
    }
   };

    React.useEffect(()=>{
       timeoutRef.current = setTimeout(()=>{
            //Slideshow is just starting and progressing towards the left
            if(index < numSlides && sw == 1){
                setIndex(prevIndex => prevIndex + 1)//set index t0 the next slide
            }else if(index == numSlides){
                //if we have gone through the whole slides, let us return back by way of reversal
                setIndex(prevIndex => prevIndex - 1)//set index to the second to the last slide rather than the last since we were just on the last
                setSw(-1)
            }else{
                setIndex(index => index - 1)
                setSw(-1);
                if(index==0){//this ensures the animation continues to infinity
                    setSw(1)
				}
            }
        },delay);

        return ()=>{
            resetTimeout();
        }
    }, [index])
   
   const styles = {
    // transform:`translate3d(${-index * 100}%,0,0)`,
    left:"-"+(index * 100)+"%",
    transition: 'ease 2000ms'
  }

  const nextSlide = ()=>{
    if(index <= numSlides){
        setIndex(prevIndex => prevIndex +1);
    }
  };

  const prevSlide = ()=>{
    if(index > 0 ){
        setIndex(prevIndex => prevIndex -1);
    }
  }

  return (
    <div className='slideshow overflow-hidden pt-5  w-full z-50 h-[500px] relative'>
       <div className='slideshowSlider h-full w-full relative flex' style={styles}>
     
        {posts.slice(0,3).map((post, index)=>(
          
          <div className={`slide w-full h-full flex-shrink-0 relative bg-cover  bg-center`} key={index} style={{backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)),url(${post.imageUrl})`}}>
            <div className='container max-w-[1140px] w-11/12 mx-auto z-[2] relative top-2/4 transform -translate-y-2/4'>
                <Link to='' className='transition-all duration-100 hover:bg-primary-light bg-primary py-2 px-4 mb-3 inline-block text-white text-xs rounded font-semibold'>{post.cat}</Link>
                <h2 className='max-w-[700px] text-left text-2xl lg:text-4xl font-bold text-white relative leading-8 lg:leading-10 pb-5'>
                    <Link to="" className=''>{post.title}</Link>
                </h2>
                <h4 className='max-w-[700px] text-xs lg:text-sm font-semibold text-left leading-5 pb-4 text-white w-full'>
                    {post.body}
                </h4>
                <div className='mt-3 flex items-center'>
                    <div className=' h-9 w-9 rounded-full overflow-hidden border border-primary'>
                        <img src={post.author_avatar} alt="" />
                    </div>
                    <p className='flex gap-x-3 text-white ml-2 text-xs font-medium uppercase'>
                        <span>By {post.author_name}</span>
                        <span>{post.post_date}</span>
                    </p>
                </div>
            </div>
          </div>
        ))}
          
       </div>
       
       <div className='slides-controllers-left flex lg:block absolute bottom-2 lg:bottom-0 lg:top-2/4 transform -translate-y-2/4 right-24'>
            <div onClick={nextSlide}className="bg-primary transition-all duration-100 hover:bg-primary-dark text-xs cursor-pointer mr-2 lg:mr-0 mb-0 lg:mb-3 block text-center w-8 h-8 leading-8 text-white rounded">
                <FaCaretRight className="inline"/>
            </div>

            <div onClick={prevSlide} className="bg-primary transition-all duration-100 hover:bg-primary-dark cursor-pointer text-xs block text-center w-8 h-8 leading-8 text-white rounded">
                <FaCaretLeft className="inline"/>
            </div>
        </div>

        <div className="container max-w-[1140px] w-11/12 mx-auto z-[2] relative">
            <div className='slides-controllers-circle absolute bottom-2 flex'>
                {posts.slice(0,3).map((_, idx)=>(
                    <div onClick={()=>setIndex(idx)} key={idx} className={`cursor-pointer ml-1  border  transition-all duration-100  h-3 w-3 flex items-center justify-center p-2 rounded-full text-center ${idx == index ? 'border-primary' : 'border-transparent'}`}>
                        <span className={` ${idx == index ? 'bg-primary' : 'bg-[#c4c4c4]'} inline-block h-2 w-2 rounded-full flex-shrink-0`}>&nbsp;</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Hero