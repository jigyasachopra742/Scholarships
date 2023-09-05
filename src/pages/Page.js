import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Scholarship_Category from './Scholarship_Category';
import './Page.css'
import Allscholarships from './Allscholarships';
import Form from './Form';

const Page = () => {
  return (
    <>
      <div className='page'>
          <Routes>
              <Route path='/' element= {<Home />}></Route>
              <Route path='about' element= {<About />}></Route>
              <Route path='contact' element= {<Contact />}></Route>
              <Route path='all_scholarships' element= {<Allscholarships />}></Route>
              <Route path='form' element = {<Form />}></Route>
              <Route path='government' element = {<Scholarship_Category category="government" />}></Route>
              <Route path='private' element = {<Scholarship_Category category="private" />}></Route>
              <Route path='international' element = {<Scholarship_Category category="international"/>}></Route>
              <Route path='university' element = {<Scholarship_Category category="university"/>}></Route>
              <Route path='girls' element = {<Scholarship_Category category="girls"/>}></Route>
              <Route path='engineering' element = {<Scholarship_Category category="engineering"/>}></Route>
          </Routes>
      </div>
    </>
  )
}

export default Page