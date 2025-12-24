import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const RequestStatus = () => {
  const [requests, setRequests] = useState([]);

  const userEmail = localStorage.getItem("email"); 
  console.log("USER EMAIL:",userEmail)

  useEffect(() => {
    axios
      .get(`http://localhost:3000/myrequests/${userEmail}`)
      .then((res) => setRequests(res.data))
      .catch((err) => console.log(err));
  }, [userEmail]);
  return (
    <div>
    <h1 style={{ color: "red" }}>Request Status</h1>
    <TableContainer component={Paper}>
    <Table border="1" width="100%" cellPadding="10" >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>PhoneNo</TableCell>
            <TableCell>Blood Group</TableCell>
            <TableCell>Units</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {requests.map((req) => (
            <TableRow key={req._id}>
              <TableCell>{req.name}</TableCell>
              <TableCell>{req.phone}</TableCell>
              <TableCell>{req.bloodGroup}</TableCell>
              <TableCell>{req.units || "-"}</TableCell>
              <TableCell>{req.type}</TableCell>

              <TableCell>
                {req.status === "pending" && (
                  <span style={{ color: "orange" }} disabled>
                    PENDING
                  </span>
                )}

                {req.status === "approved" && (
                  <span style={{ color: "green" }} disabled>
                    APPROVED
                  </span>
                )}

                {req.status === "rejected" && (
                  <span style={{ color: "red" }} disabled>
                    REJECTED
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default RequestStatus;