import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Button } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
const AdDash = () => {
  const[donors,setDonors]=useState([]);
  useEffect(()=>{
    fetchDonors();
  },[]);
  const fetchDonors=async()=>{
    try{
      const response=await axios.get('http://localhost:3000/viewdonors');
      setDonors(response.data);
    }catch(error){
      console.error(error);
    }
  }
  const deleteDonor=async(id)=>{
    await axios.delete(`http://localhost:3000/deletedonor/${id}`)
    alert("Donor deleted successfully")
    fetchDonors()
  }
  const navigate=useNavigate();
  return (
    <div>
         <h1 style={{color:"red"}} >Donors List</h1>
                    <TableContainer/>
                      <Table>
                          <TableHead>
                              <TableRow>
                                  <TableCell>Name</TableCell>
                                  <TableCell>Blood</TableCell>
                                  <TableCell>Phone</TableCell>
                                  <TableCell >Deletion</TableCell>
                                  <TableCell >Updation</TableCell>
                              </TableRow>
                      </TableHead>
                      <TableBody>
                          {donors.map((val)=>{
                              return(
                          <TableRow key={val._id}>
                                      <TableCell>{val.name}</TableCell>
                                      <TableCell>{val.blood_group}</TableCell>
                                      <TableCell>{val.phno}</TableCell>
                                   <TableCell> <Button color='error' variant='contained' onClick={()=>deleteDonor(val._id)}>DELETE</Button></TableCell>
                                    <TableCell><Button color='success' variant='contained'onClick={()=>navigate(`/updatedonor/${val._id}`)} >UPDATE</Button></TableCell>
                          </TableRow>
                          )
                        })}
                      </TableBody>
                      </Table>
    </div>
  )
}

export default AdDash