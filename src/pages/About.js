import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className='BOX'>
      <div className='heading'>
          <h1>About Us</h1>
          <p>A scholarship is a form of financial aid awarded to students for further education. Generally, 
            scholarships are awarded based on a set of criteria such as academic merit, diversity and 
            inclusion, athletic skill, and financial need.
          </p>
      </div>

      <div className='container'>
        <section className='about'>
          
          <div className='about-image'>
            <img src='https://img.freepik.com/free-vector/books-with-money-loans-scholarships_603843-826.jpg' alt='photo'/>
          </div>

          <div className='about-content'>
            <h2>Make your dreams come true</h2>
            <p>Scholarship criteria usually reflect the values 
              and goals of the donor of the award, and while scholarship recipients are not required to 
              repay scholarships, the awards may require that the recipient continue to meet certain 
              requirements during their period of support, such maintaining a minimum grade point average 
              or engaging in a certain activity e.g., playing on a school sports team for athletic 
              scholarship holders
            </p>
            <a href='' className='read-more'>Read More</a>
          </div>
        
        </section>
      </div>
    </div>
   
  )
}

export default About