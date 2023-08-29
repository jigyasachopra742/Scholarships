import React from 'react'
import "./Contact.css";
// import { FaPencil } from 'react-icons/fa'
// import { IoIosAdd } from 'react-icons/io'
import { TiLocation } from 'react-icons/ti';
import { RiPhoneFill} from 'react-icons/ri';
import { AiTwotoneMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <>
      <section className='contact'>
        
        <div className='content'>
          <h1>Contact US</h1>
           
        </div>

        <div className='container'>
            <div className='contactInfo'>
              <div className='box'>
                <div className='icon'><TiLocation /></div>
                <div className='text'>
                  <h2>Address</h2>
                  <p>4671 Sugar Camp Road
                    Owatonna , Minnesota
                    55060
                  </p>
                </div>
              </div>

              <div className='box'>
                <div className='icon'><RiPhoneFill /></div>
                <div className='text'>
                  <h2>Phone</h2>
                  <p>507-475-6094</p>
                </div>
              </div>

              <div className='box'>
                <div className='icon'><AiTwotoneMail /></div>
                <div className='text'>
                  <h2>Email</h2>
                  <p>helloguys@temporary-mail.net</p>
                </div>
              </div>
            </div>

            <div className='contactForm'>
                <form>
                  <h2>Send Message</h2>
                  <div className='inputBox'>
                    <input type='text' name='' required="required"></input>
                    <span>Full Name</span>
                  </div>

                  <div className='inputBox'>
                    <input type='text' name='' required="required"></input>
                    <span>Email</span>
                  </div>

                  <div className='inputBox'>
                    <textarea type='text' name='' required="required"></textarea>
                    <span>Type your Message</span>
                  </div>

                  <div className='inputBox'>
                      <input type='submit' name='' required="required"></input>
                  </div>
                
                </form>
            </div>

        </div>
      </section>
    </>
  )
}

export default Contact