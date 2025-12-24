import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate,} from 'react-router-dom'
import axios from 'axios';

const Sign = () => {
  const navigate = useNavigate();
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[phoneno,setPhone]=useState('');
  const[bloodgroup,setBloodGroup]=useState('');
  const[password,setPassword]=useState(''); 
  const[confirmPassword,setConfirmPassword]=useState('');
  const handleSignUp = async () => {
    console.log("SIGNUP CLICKED")
    if(password!==confirmPassword){
      alert("Passwords don't match")
      return
    }
    try {
      const response = await axios.post('http://localhost:3000/sign', {
        name,email,phoneno:Number(phoneno),bloodgroup,password
      });
      console.log("RESPONSE:",response)
    if (response.data.status==="success") {
        alert("Sign up successful");
        navigate("/lo");
    }
    } catch (error) {
      console.error(error)
      alert("cannot signup")
    }
  };
  return (
    <div>
        <h2 style={{color:"red"}}>Sign Up Page</h2>
        <TextField label="name" variant="outlined" onChange={(e)=>setName(e.target.value)} /><br /><br />
        <TextField label="email" variant="outlined" onChange={(e)=>setEmail(e.target.value)} /><br /><br />
        <TextField label="phoneno" variant="outlined" onChange={(e)=>setPhone(e.target.value)} /><br /><br /> 
        <TextField label="BloodGroup" variant="outlined" onChange={(e)=>setBloodGroup(e.target.value)} /><br /><br />
        <TextField label="password" type="password" variant="outlined" onChange={(e)=>setPassword(e.target.value)} /><br /><br />
        <TextField label="confirmPassword" type="passsword" variant="outlined" onChange={(e)=>setConfirmPassword(e.target.value)} /><br /><br />
        <Button variant='contained' color='error' onClick={handleSignUp}>Sign Up</Button>
    </div>
  )
}

export default Sign