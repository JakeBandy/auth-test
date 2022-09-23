import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";

const Navigation = (props) => {
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#11cb5f",
        darker: "#053e85",
      },
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });

  useEffect(() => {
    console.log("NAVIGATION PROPS", props);
  }, [props]);

  return (
    <ThemeProvider theme={theme}>
      {props.user.isLoggedIn === false ? (
        <AppBar position="relative">
          <Toolbar>
            <Typography color="white" variant="h6" style={{ flexGrow: "1" }}>
              Austin Small Business
            </Typography>
            <ul className="nav-list">
              <li className="nav-list-item">
                <Link to="/">Listings</Link>
              </li>
              <li className="nav-list-item">
                <Link to="/sign-in">Login</Link>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
      ) : (
        <div>
          <AppBar position="relative">
            <Toolbar>
              <Typography color="white" variant="h6" style={{ flexGrow: "1" }}>
                Austin Small Business
              </Typography>
              <ul className="nav-list">
                <li className="nav-list-item">
                  <Link to="/">Listings</Link>
                </li>
                <li className="nav-list-item">
                  <Link to="/new-listings">Add</Link>
                </li>
                <li className="nav-list-item">
                  <Link onClick={() => props.login()} to="/sign-in">Logout</Link>
                </li>
              </ul>
            </Toolbar>
          </AppBar>
          <Stack spacing={2} sx={{ width: "100%" }}>
            <SnackbarContent sx={{ height: 20, paddingTop: "0px", backgroundColor: "gray" }} message={`Logged in as: Default user`} />
          </Stack>
        </div>
      )}
    </ThemeProvider>
  );
};
export default Navigation;