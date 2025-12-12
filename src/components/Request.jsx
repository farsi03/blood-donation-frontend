import React from 'react'
import TextField from '@mui/material/TextField';
import { useState } from 'react';   
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';




const Request = () => {
  const [type, setType] = useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };
  return (
    <div>
        <h2 style={{color:"red"}}>Request Form</h2>
        <TextField id="filled-basic" label="Name" variant="filled" />
        <br /><br />
        <TextField id="filled-basic" label="Age" variant="filled" />
        <br /><br />
        <TextField id="filled-basic" label="E-mail" variant="filled" />
        <br /><br />
        <TextField id="filled-basic" label="Phone Number" variant="filled" />
        <br /><br />
        <TextField id="filled-basic" label="Blood Group" variant="filled" />    
        <br /><br />
         <Box sx={{ minWidth: 50 }}>
      <FormControl  variant='filled' fullWidth sx={{mt:2, width:215}}>
        <InputLabel id="demo-simple-select-label">Request Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Request Category"
          onChange={handleChange}
        >
          <MenuItem value="Donor">Donor</MenuItem>
          <MenuItem value="Receiver">Receiver</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <br /><br />
    <TextField id="filled-basic" label="Units Required" variant="filled" /><br /><br />
    <Button variant='contained' color='error'>Submit Request</Button>
    </div>
  )
}

export default Request