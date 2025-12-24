import React ,{useEffect,useState} from 'react'
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
const Dashboard = () => {
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then((res)=> {
        setDonors(res.data);
      })
      .catch((err)=> {
        console.error(err);
      });
  }, []);
   
  return (
    <div>
        <h1 style={{color:"red"}} >Users List</h1>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Blood Group</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {donors.map((val)=>(
                <TableRow key={val.id}>
                  <TableCell>{val.name}</TableCell>
                  <TableCell>{val.email}</TableCell>
                  <TableCell>{val.phoneno}</TableCell>
                  <TableCell>{val.bloodgroup}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
                
        
    </div>
  )
}

export default Dashboard