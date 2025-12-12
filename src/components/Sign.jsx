import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sign = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/dashboard");
  };
  return (
    <div>
        <h2 style={{color:"red"}}>Sign Up Page</h2>
        <TextField label="Name" variant="outlined" /><br /><br />
        <TextField label="Email" variant="outlined" /><br /><br />
        <TextField label="Phone.No" type="password" variant="outlined" /><br /><br />
        <TextField label="Password" variant="outlined" /><br /><br />
        <Button variant='contained' color='error' onClick={handleSignUp}>Sign Up</Button>
    </div>
  )
}

export default Sign