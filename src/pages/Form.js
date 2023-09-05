import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './Form.css';

const notify = () => toast("Wow so easy!");

const handleSubmit = () => {
 
  fetch('http://localhost:9090/user/added', {
  method: 'POST',
  body: JSON.stringify({
               name: "",
               email: ""
  }),
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

  notify();
}

const Form = () => {
  return (
    <>
      <main>
        <div className='imgBx'>
          <img src='https://images.pexels.com/photos/15193372/pexels-photo-15193372/free-photo-of-graduation-photos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image'></img>
        </div>
        <div className='contentBx'>
          <div className='formBx'>
              <h2>Registration Form</h2>
              <form>
                <div className='inputBx'>
                  <span>Name of the user</span>
                  <input type='text' name=''></input>
                </div>
                
                <div className='inputBx'>
                  <span>Email ID of user</span>
                  <input type='text' name=''></input>
                </div>
                
                <div className='inputBx'>
                  <button type='submit' onClick={handleSubmit}>Submit</button>
                  <ToastContainer />
                </div>
              </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default Form;