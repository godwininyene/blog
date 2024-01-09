import React from 'react';
import './App.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';
import BaseLayout from './Layouts/BaseLayout';
import Home from './Pages/Home';
import About from './Pages/About';	
import Contact from './Pages/Contact';
import PostLayout from './Layouts/PostLayout';
import Posts from './Pages/Posts';
import Category from './Pages/Category';
import PostDetail from './Pages/PostDetail';
import NotFound from './Components/NotFound'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<BaseLayout /> }>

    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />

    <Route path='posts' element= {<PostLayout />}>
      <Route index element={<Posts />}/>
      <Route path="category/:cat_title" element={<Category />} />
      <Route path=':id' element={<PostDetail />}/>
    </Route>

    <Route path="*" element={<NotFound />} />

  </Route>
));

function App() {
  return(<RouterProvider router={router} />)
}
export default App
