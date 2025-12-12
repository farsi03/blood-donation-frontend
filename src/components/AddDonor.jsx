import { Button } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';


const AddDonor = () => {
  return (
    <div>
         <h2 style={{color:"red"}}>Donor Details</h2>
                <TextField id="filled-basic" label="Name" variant="filled" />
                <br /><br />
                <TextField id="filled-basic" label="Age" variant="filled" />
                <br /><br />
                <TextField id="filled-basic" label="E-mail ID" variant="filled" />
                <br /><br />
                <TextField id="filled-basic" label="Phone Number" variant="filled" />
                <br /><br />
                <TextField id="filled-basic" label="Blood Type" variant="filled" />    
                <br /><br />    
                <Button variant='contained' color='error'>Submit </Button>
    </div>
  )
}

export default AddDonor