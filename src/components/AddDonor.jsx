import { Button } from '@mui/material'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddDonor = () => {
  const navigate=useNavigate();
  const[donor,setDonor]=useState({
    name:'',
    age:'',
    email:'',
    phone:'',
    bloodGroup:''
  });
  const handleChange=(e)=>{
    setDonor({...donor,[e.target.name]:e.target.value});
  }
  const handleSubmit=async()=>{
    try{
    await axios.post('http://localhost:3000/adddonor',donor);
    alert("Donor Added Successfully");
    navigate('/admindashboard');
  }
  catch(error){
    console.error(error);
    alert("Failed to add donor");
  }
}
  return (
    <div>
         <h2 style={{color:"red"}}>Donor Details</h2>
                <TextField id="filled-basic" label="name" variant="filled" name="name" value={donor.name} onChange={handleChange} />
                <br /><br />
                <TextField id="filled-basic" label="Age" variant="filled" name="age" value={donor.age} onChange={handleChange} />
                <br /><br />
                <TextField id="filled-basic" label="E-mail ID" variant="filled" name="email" value={donor.email} onChange={handleChange} />
                <br /><br />
                <TextField id="filled-basic" label="Phone Number" variant="filled" name="phno" value={donor.phno} onChange={handleChange} />
                <br /><br />
                <TextField id="filled-basic" label="Blood Type" variant="filled" name="blood_group" value={donor.blood_group} onChange={handleChange} />    
                <br /><br />    
                <Button variant='contained' color='error' onClick={handleSubmit}>Submit </Button>
    </div>
  )
}

export default AddDonor