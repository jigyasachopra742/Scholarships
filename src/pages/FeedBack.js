import { Button, hexToRgb } from "@mui/material"
import "./Feedback.css"
import { useState } from "react"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function FeedBack(){

const notify = async () => toast("Feedback Registered Successfully !")
let [exp,setExp] = useState(0);
let [formData,setFormData] = useState({});

function handleExperience(index){
    setExp(exp=index);
    console.log(exp);
}

const handleChange=(e)=>{
    const {name, value} = e.target;
    setFormData(formData={...formData,[name]:value})
    console.log(formData);
}
const handleSubmit=(e)=>{
    e.preventDefault();
    notify();
    fetch('http://localhost:9090/feedback/add', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
    .then((data) => {
        console.log(data);
        // Handle data
    }).then((data)=> notify())
    .catch((err) => {
        console.log(err.message);
    })
    
}
    return (
        <>
            <div className="feedback_div">
                <div className="feedback_head">FeedBack Form</div>
                <div className="contain">
                    <div style={{fontSize:'28px',color:'white',backgroundColor:'rgba(64, 93, 248, 1)',textAlign:'center',padding: '10px',border:'1px solid white',borderRadius:'10px 10px 0px 0px'}}>
                        FeedBack
                    </div>
                    <div style={{paddingTop:'15px',paddingBottom:'20px',display:'flex',flexDirection:'column',flexWrap:'nowrap',backgroundColor:'white',paddingLeft:'30px',borderRadius:'0px 0px 10px 10px'}}>
                        <div style={{textAlign:'center'}}><input onChange={handleChange} name="username"  type="text" placeholder="Enter Your Username" style={{marginBottom:'15px',width:'70%',borderRadius:'25px',border:'1px solid black'}}/></div>
                        <div style={{textAlign:'center'}}><input onChange={handleChange} name="email"  type="email" placeholder="Enter Your email" style={{marginBottom:'15px',width:'70%',borderRadius:'25px',border:'1px solid black'}}/></div>
                        <div>
                            <div style={{fontSize:'22px',marginBottom:'5px'}}>How was your Experience ?</div>
                            <div style={{height:'50px',display:'flex',marginLeft:'20px'}}>
                                    <div className="back_img" id="img1" onClick={()=>handleExperience(1)}></div>
                                    <div className="back_img" id="img2" onClick={()=>handleExperience(2)} ></div>
                                    <div className="back_img" id="img3"  onClick={()=>handleExperience(3)}></div>
                                    <div className="back_img" id="img4" onClick={()=>handleExperience(4)}></div>
                                    <div className="back_img" id="img5"  onClick={()=>handleExperience(5)}></div>
                            </div>
                            <div>
                                <div style={{fontSize:'22px',opacity:'0.4',marginTop:'15px',marginBottom:'15px'}}>Choose your Experience</div>
                            </div>
                            <div style={{height:'200px'}}>
                                <textarea onChange={handleChange} name="experience" type="text" style={{height:'80%',width:'90%',borderRadius:'10px',border:'1px solid black',paddingRight:'20px'}}/>
                            </div>
                            <div style={{textAlign:'center'}}>
                                <Button onClick={handleSubmit} style={{width:'80%',backgroundColor:'rgba(64, 93, 248, 1)',color:'white',height:'40px', borderRadius:'20px'}}type="submit" >Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}