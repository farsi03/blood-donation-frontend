import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Button } from '@mui/material';

const AdDash = () => {
    const donors = [
    {  name: "Ameen", blood: "A+", phone: "9876543210"},
    {  name: "Rahul", blood: "B+", phone: "9123456780" },
    { name: "Alfiya", blood: "O-", phone: "7890123456" }];
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
                          <TableRow>
                                      <TableCell>{val.name}</TableCell>
                                      <TableCell>{val.blood}</TableCell>
                                      <TableCell>{val.phone}</TableCell>
                                   <TableCell> <Button color='error' variant='contained' >DELETE</Button></TableCell>
                                    <TableCell><Button color='success' variant='contained' >UPDATE</Button></TableCell>
                          </TableRow>
                          )
                        })}
                      </TableBody>
                      </Table>
    </div>
  )
}

export default AdDash