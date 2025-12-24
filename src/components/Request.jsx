import React, { useState } from 'react'
import {
  TextField, Box, InputLabel, MenuItem,
  FormControl, Select, Button
} from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Request = () => {
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("email");

  const [form, setForm] = useState({
    name: '',
    age: '',
    phone: '',
    bloodGroup: '',
    units: '',
    type: ''
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitRequest = async () => {
    console.log("SENDING:", { ...form, userEmail });

    try {
      const res = await axios.post('http://localhost:3000/addrequest', {
        name: form.name,
        age: Number(form.age),
        phone: Number(form.phone),
        bloodGroup: form.bloodGroup,
        units: Number(form.units),
        type: form.type,
        userEmail
      });

      if (res.data.status === "success") {
        alert("Request submitted successfully");
        navigate('/');
      }
    } catch (err) {
      console.error(err);
      alert("Request submission failed");
    }
  };

  return (
    <div>
      <h2 style={{ color: "red" }}>Request Form</h2>

      <TextField label="Name" variant="filled"
        name="name" value={form.name} onChange={handleInputChange} /><br /><br />

      <TextField label="Age" variant="filled"
        name="age" value={form.age} onChange={handleInputChange} /><br /><br />

      <TextField label="Phone Number" variant="filled"
        name="phone" value={form.phone} onChange={handleInputChange} /><br /><br />

      <TextField label="Blood Group" variant="filled"
        name="bloodGroup" value={form.bloodGroup} onChange={handleInputChange} /><br /><br />

      <Box sx={{ minWidth: 300 }}>
        <FormControl variant="filled" sx={{width:215}}>
          <InputLabel>Request Category</InputLabel>
          <Select
            name="type"
            value={form.type}
            onChange={handleInputChange}
          >
            <MenuItem value="Donor">Donor</MenuItem>
            <MenuItem value="Receiver">Receiver</MenuItem>
          </Select>
        </FormControl>
      </Box ><br />

      {form.type === "Receiver" && (
        <TextField label="Units Required" variant="filled"
          name="units" value={form.units} onChange={handleInputChange} />
      )}<br /><br />

      <Button variant="contained" color="error" onClick={submitRequest}>
        Submit Request
      </Button>
    </div>
  );
};

export default Request;