import React from 'react';
import {Link}from 'react-router-dom';

const NotFound = ()=>{
    return(
        <div className="text-center my-10">
            <h1 className="text-xl">Sorry, the page you were looking for was not found.</h1>
            <Link className='py-3 px-10 bg-black inline-block rounded my-3 text-white' to='/'>Go Home</Link>
        </div>
    )
}

export default NotFound;