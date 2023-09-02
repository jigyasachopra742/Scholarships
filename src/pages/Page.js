import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Scholarship_Category from './Scholarship_Category';
import './Page.css'
import Allscholarships from './Allscholarships';

const Page = () => {
  return (
    <>
      <div className='page'>
          <Routes>
              <Route path='/' element= {<Home />}></Route>
              <Route path='about' element= {<About />}></Route>
              <Route path='contact' element= {<Contact />}></Route>
              <Route path='all_scholarships' element= {<Allscholarships />}></Route>
              <Route path='government' element = {<Scholarship_Category category="government" />}></Route>
              <Route path='private' element = {<Scholarship_Category category="private" />}></Route>
              <Route path='international' element = {<Scholarship_Category category="international"/>}></Route>
          </Routes>
      </div>
    </>
  )
}

export default Page