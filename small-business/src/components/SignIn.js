import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/joy/Box";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";

const SignIn = (props) => {
  useEffect(() => {
    console.log("SIGNIN PROPS", props.user.isLoggedIn);
  }, [props]);

  return (
    <div>
      {props.user.isLoggedIn === false ? (
        <div className="login-page">
          <Box sx={{ width: "40%" }}>
            <TextField
              sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
              id="description-basic"
              placeholder="Username"
              variant="standard"
            />
            <TextField
              sx={{ border: "1", borderBottom: "1px solid lightgrey;" }}
              id="description-basic"
              placeholder="Password"
              variant="standard"
            />
            <br></br>
            <Button
              sx={{ width: "100%", color: "black", background: "lightgrey" }}
              onClick={() => props.login()}
              variant="solid"
            >
              Login
            </Button>
          </Box>
        </div>
      ) : (
        <div className="maintable">
          <TableContainer elevation={0} className="table" component={Paper}>
            <Table
              sx={{
                minWidth: 650,
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell className="firstrow" align="left">
                    Name
                  </TableCell>
                  <TableCell className="secondrow" align="left">
                    Description
                  </TableCell>
                  <TableCell className="thirdrow" align="left">
                    Hours
                  </TableCell>
                  <TableCell className="fourthrow" align="left">
                    Address
                  </TableCell>
                  <TableCell className="fourthrow" align="left">
                    Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.business.map((row, idx) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell sx={{ color: "black" }} align="left">
                      {" "}
                      <Link to={`/business/${row.id}`}>{row.name}</Link>{" "}
                    </TableCell>
                    <TableCell align="left">{row.description}</TableCell>
                    <TableCell className="thirdrow" align="left">
                      {row.hours}
                    </TableCell>
                    <TableCell align="left">{row.address}</TableCell>
                    <TableCell align="left">
                      {" "}
                      <Grid item xs={8}>
                        <DeleteIcon
                          onClick={() => props.removeBusiness(idx)}
                          sx={{ color: "red" }}
                        />
                      </Grid>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default SignIn;