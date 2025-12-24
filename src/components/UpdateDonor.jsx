import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateDonor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [donor, setDonor] = useState({
    name: "",
    blood_group: "",
    phno: ""
  });

  // fetch existing donor
  useEffect(() => {
    axios.get(`http://localhost:3000/getdonor/${id}`)
      .then(res => {setDonor(res.data)
  })
  .catch(err=>console.log(err));
},[id]);
      

  // update donor
  const handleUpdate = async () => {
    await axios.put(`http://localhost:3000/updatedonor/${id}`, donor);
    alert("Donor updated successfully");
    navigate("/admindashboard");
  };


  return (
    <div>
      <h2 style={{color:"red"}}>Update Donor</h2>

      <TextField
        label="Name"
        value={donor.name}
        onChange={e => setDonor({ ...donor, name: e.target.value })}
      /><br/><br/>

      <TextField
        label="Blood Group"
        value={donor.blood_group}
        onChange={e => setDonor({ ...donor, blood_group: e.target.value })}
      /><br/><br/>

      <TextField
        label="Phone"
        value={donor.phno}
        onChange={e => setDonor({ ...donor, phno: e.target.value })}
      /><br/><br/>

      <Button variant="contained" color="success" onClick={handleUpdate}>
        UPDATE
      </Button>
    </div>
  );
};

export default UpdateDonor;