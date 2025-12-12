import { Button, colors, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const[username,setUserName]=useState('');
  const[password,setPassword]=useState(''); 

  const adminUser="admin";
  const adminPassword="admin123";

  const handleLogin = () => {

    if(username == adminUser && password == adminPassword)
    {
      alert("Login Successful");
      navigate("/admindashboard");
    }
    else
    navigate("/dashboard");
  };
      return (
    <div>
        <h2 style={{color:"red"}}>Login Page</h2>
        <TextField label="Username" variant="outlined" onChange={(e)=>setUserName(e.target.value)} /><br /><br />
        <br />
        <TextField label="Password" type="password" variant="outlined"onChange={(e)=>setPassword(e.target.value)} /> <br /><br />  
        <Button variant='contained' color='error'onClick={handleLogin}>Login</Button>
    </div>
  )
}

export default Login