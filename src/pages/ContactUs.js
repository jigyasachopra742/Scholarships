import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <>
        <section className="footer_get_touch_outer">
            <div className="container">
                <div className="footer_get_touch_inner grid-70-30">
                    <div className="column-70 get_form">
                        <div className="get_form_inner">
                            <div className="get_form_inner_text">
                            <h3>Get In Touch</h3>
                            </div>
                            <form action="#">
                            <div className="grid-50-50">
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                                <input type="email" placeholder="Email" />
                                <input type="tel" placeholder="Phone" />
                            </div>
                            <div className="grid-full">
                                <textarea placeholder="About Your Idea" cols="30" rows="10"></textarea>
                                <input type="submit" value="Submit" />
                            </div>
                            </form>
                        </div>
                    </div>
            
                <div className="column-30 get_say_form">
                    <h5>Say Hi!</h5>
                    
                    <ul className="get_say_info_sec">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <a href="mailto:">jigyasachopra101@gmail.com</a>
                        </li>
                        <li>
                            <i className="fa fa-whatsapp"></i>
                            <a href="tel:">+91 8377927745</a>
                        </li>
                        <li>
                            <i className="fa fa-linkedin"></i>
                            <a href="https://www.linkedin.com/in/jigyasachopra/">Jigyasa Chopra</a> 
                        </li>
                    </ul>  
                    
                    <ul class="get_say_social-icn">
                        <li><a href="https://github.com/jigyasachopra742"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://www.instagram.com/jigyasachopra742/"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                     
                    </ul>          
                
                </div>        
            </div>
        </div>
        </section>
    </>
  )
}

export default ContactUs