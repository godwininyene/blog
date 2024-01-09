import React from 'react';
import {FaFacebookF, FaTwitter, FaInstagram, FaPinterestP} from 'react-icons/fa';




const TopBar = ()=>{
    const [ height, setHeight] = React.useState(70);

    window.addEventListener('scroll', ()=>{
        window.pageYOffset > 20 ? setHeight(0) : setHeight(70);
    })
    
    return(
        <div className={`bg-[#292929] overflow-hidden  transition-all duration-200 ease-in w-full relative`} style={{height:height}}>
            
            <div className="container max-w-[1140px] w-11/12 relative mx-auto z-[2] h-full">
                <div className='row flex items-center  gap-x-5'>
                    {/*Date Holder Start*/}
                    <div className="h-[70px] text-white  w-[90px] flex items-center gap-x-3">
                        <span className="text-3xl font-bold">13</span>
                        <div className="flex flex-col items-start">
                            <span className="text-sm font-medium block">Jul</span>
                            <span className="text-sm font-medium block">2023</span>
                        </div>
                        <span className="w-px h-10 bg-slate-300">&nbsp;</span>
                    </div>
                    {/*Date Holder End*/}

                    {/*Header News Ticker Start*/}
                    <div className="overflow hidden lg:flex items-center gap-x-5">

                        <div className="w-24 h-8 leading-8 text-white transition-all duration-100 hover:bg-primary-dark bg-primary text-xs text-center font-semibold px-2 cursor-pointer">Hot News:</div>
                        <div className="w-full bg-[#222] self-stretch">
                            <ul className="">
                                <li className="text-white leading-[4] px-10">Nigeria Government Make fresh promises to her Students.</li>
                            </ul>
                        </div>
                    </div>
                    {/*Header News Ticker End*/}

                    {/*Header Social Icons Start*/}
                    <ul className="flex gap-x-2 ml-5 lg:ml-auto items-center">
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
                    {/*Header Social Icons End*/}
                </div>
            </div>
        </div>
    )
};

export default TopBar