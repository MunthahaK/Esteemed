import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';
import './Form.css'
import { useState } from 'react';

function Form() {

  const [from_name,setFrom_name] = useState("")
    const [from_email,setFrom_email] = useState("")
    const [from_phone,setFrom_phone] = useState("")
    const [message,setMessage] = useState("")

    const [errFrom_name,setErrFrom_name] = useState("")
    const [errFrom_email,setErrFrom_email] = useState("")
    const [errFrom_phone,setErrFrom_phone] = useState("")
    const [errMessage,setErrMessage] = useState("")

    const handleName=(e)=>{
      setFrom_name(e.target.value)
      setErrFrom_name("")
  }
  const handleEmail=(e)=>{
      setFrom_email(e.target.value)
      setErrFrom_email("")
  }
  const handlePhone=(e)=>{
      setFrom_phone(e.target.value)
      setErrFrom_phone("")
  }
  const handleMessage=(e)=>{
      setMessage(e.target.value)
      setErrMessage("")
  }

  const emailValidation=(from_email)=>{
      return String(from_email).toLowerCase().match(
        /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)  
  }
  const form = useRef();
   var p = new RegExp(/^[0-9\b]+$/)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!from_name){
      setErrFrom_name("Enter your name")
  }
  if(!from_email){
      setErrFrom_email("Enter your email")
  }else{
      if(!emailValidation(from_email)){
      setErrFrom_email("Enter a valid email") 
      }
  }
  if(!from_phone){
      setErrFrom_phone("Enter your Phone Number")
  }else{
    if(from_phone.length!=10){
      setErrFrom_phone("Phone number should have 10 digits")   
     }
  }
   
  if(!message){
      setErrMessage("Enter your message here")
  }
  if(from_name && from_email && emailValidation(from_email) && from_phone && from_phone.length==10 && message){
      emailjs.sendForm('service_uh2qkwf', 'template_pczaq7c', form.current, '9A9ba2hLYaSHOlOHT')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
           title: "Done",
           text: "Your message has been sent!",
          });
          setFrom_name("")
          setFrom_email("")
          setFrom_phone("")
          setMessage("")
      }, (error) => {
          console.log(error.text);
      }); 
     } 
  };
  return (
    <div>
       <form ref={form}>
          <h1>Get In Touch</h1>
          <input 
             type='text' 
             name='from_name' 
             value={from_name} 
             placeholder='Enter name' 
             onChange={handleName}
             required
             autoComplete='off'
          /> {errFrom_name && <span>{errFrom_name}</span>} 

          <input 
             type='email' 
             name='from_email' 
             value={from_email} 
             placeholder='example@gmail.com' 
             onChange={handleEmail}
             required
             autoComplete='off'
          />{errFrom_email && <span>{errFrom_email}</span>}
             
          <input 
             type='number' 
             name='from_phone'  
             value={from_phone} 
             placeholder='Phone"0512345678"' 
             onChange={handlePhone}
             required
             autoComplete='off'
          />{errFrom_phone && <span>{errFrom_phone}</span>}
             
          <textarea 
             name='message' 
             value={message} 
             cols='30' 
             rows='10' 
             placeholder='Message' 
             onChange={handleMessage}
             required 
             autoComplete='off' />
             
             {errMessage && <span>{errMessage}</span>}
        

          <button type='submit' onClick={handleSubmit}>Send</button>
       </form>
    </div>
  )
}

export default Form
