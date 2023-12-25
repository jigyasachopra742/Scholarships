import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './Form.css';

const Form = () => {
  const notify = () => toast("Registered Successfully !")
  
  const [formData,  setFormData] = useState({name:'', email:''});
  
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({...formData,[name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    notify();
    
    fetch('http://localhost:9090/user/added', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
          // Handle data
      })
      .catch((err) => {
          console.log(err.message);
      })
      
  }

  return (
    <>
      <main>
        <div className='imgBx'>
          <img src='https://images.pexels.com/photos/15193372/pexels-photo-15193372/free-photo-of-graduation-photos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image'></img>
        </div>
        <div className='contentBx'>
          <div className='formBx'>
              <h2>Registration Form</h2>
              <form onSubmit={handleSubmit}>
                <div className='inputBx'>
                  <span>Name of the user</span>
                  <input type='text' name='name' value = {formData.name} onChange = {handleChange} placeholder='Name'></input>
                </div>
                
                <div className='inputBx'>
                  <span>Email ID of user</span>
                  <input type='email' name='email'  value = {formData.email} onChange = {handleChange} placeholder='Email'></input>
                </div>                
                <div className='inputBx'>
                  <button type='submit'>Submit</button>
                </div>
                <ToastContainer />
              </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default Form;