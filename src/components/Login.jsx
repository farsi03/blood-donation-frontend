import { Button, colors, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState(''); 


  const handleLogin =async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email: email,
        password: password,
      });
      if (response.data.status==="success") {
        if(response.data.role==="admin"){
        navigate("/admindashboard");
      } else {
        localStorage.setItem("email",email)
        navigate("/dashboard");
      }
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert("Login failed");
      console.log(error)
    }
  };

  return (
    <div>
        <h2 style={{color:"red"}}>Login Page</h2>
        <TextField label="email" variant="outlined" onChange={(e)=>setEmail(e.target.value)} /><br /><br />
        <br />
        <TextField label="password" type="password" variant="outlined"onChange={(e)=>setPassword(e.target.value)} /> <br /><br />  
        <Button variant='contained' color='error'onClick={handleLogin}>Login</Button>
    </div>
  )
}

export default Login