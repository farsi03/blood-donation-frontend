import React ,{useState,useEffect} from 'react'
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Paper} from '@mui/material';
import { Button } from '@mui/material';
import axios from 'axios';
const ViewRequest = () => {
    const [requests,setRequests] = useState([]);
    const fetchRequests = async () => {
        try {
            const response = await axios.get('http://localhost:3000/getrequests');
            setRequests(response.data);
        }
        catch (error) {
            console.log(error);
        }
      };
      useEffect(() => {
        fetchRequests();
      }, []); 

      const approveRquest = async (id) => {
        await axios.put(`http://localhost:3000/approvereq/${id}`);
        alert("Request Approved");
        fetchRequests();
      }

      const rejectRquest = async (id) => {
        await axios.put(`http://localhost:3000/rejectreq/${id}`);
        alert("Request Rejected");
        fetchRequests();
      }
    
  return (
    <div>
         <h1 style={{color:"red"}} >Request List</h1>
                    <TableContainer component={Paper}>
                      <Table>
                          <TableHead>
                              <TableRow>
                                  <TableCell>Name</TableCell>
                                  <TableCell>Blood</TableCell>
                                  <TableCell>Phone</TableCell>
                                  <TableCell >Units</TableCell>
                                  <TableCell >Category</TableCell>
                                  <TableCell >Approval</TableCell>
                                  <TableCell >Rejection</TableCell>
                              </TableRow>
                      </TableHead>
                      <TableBody>
                          {requests.filter(req=>req.name && req.phone && req.bloodGroup && req.type)
                          .map((req)=>(
                            
                          <TableRow key={req._id}>
                                      <TableCell>{req.name}</TableCell>
                                      <TableCell>{req.bloodGroup}</TableCell>
                                      <TableCell>{req.phone}</TableCell>
                                      <TableCell>{req.units || "-"}</TableCell>
                                      <TableCell>{req.type}</TableCell>
                              <TableCell>{req.status==="pending" && (<Button color='success' variant='contained' onClick={()=>approveRquest(req._id)}>APPROVE</Button>)} 
                              {req.status==="approved" && (<Button color="success" variant='contained' disabled>APPROVED</Button>)}</TableCell>
                              <TableCell>{req.status==="pending" && (<Button color='error' variant='contained' onClick={()=>rejectRquest(req._id)}>REJECT</Button>)}
                              {req.status==="rejected" && (<Button color="error" variant='contained' disabled>REJECTED</Button>)}
                          </TableCell>
                          </TableRow>
                          )
                          )}
                      </TableBody>
                      </Table>
                  </TableContainer>
    </div>
  )
}

export default ViewRequest