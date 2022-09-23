import * as React from "react";
import { useEffect } from "react";
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

export default function Listings(props) {
  useEffect(() => {
    console.log("BUSINESS PROPS", props);
  }, [props]);

  return (
    <div>
      {props.user.isLoggedIn === false ? (
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
              </TableRow>
            </TableHead>
            <TableBody>
              {props.business.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    {" "}
                    <Link to={`/business/${row.id}`}>{row.name}</Link>{" "}
                  </TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                  <TableCell className="thirdrow" align="left">
                    {row.hours}
                  </TableCell>
                  <TableCell align="left">{row.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
                  <TableCell align="left">
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
                        className="icon text-red"
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
}