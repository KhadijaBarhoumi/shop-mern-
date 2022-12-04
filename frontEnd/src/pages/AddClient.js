import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import NavBar from "../components/NavBar";
import { addClient } from "../redux/Actions/ClientAction";
const AddClient = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const theme = createTheme();
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    console.log({
      fullName: data.get("fullName"),
      nbrGifts: data.get("nbrGifts"),
      resetDefault: data.get("resetDefault"),
    });
    dispatch(
      addClient({
       fullName: data.get("fullName"),
       nbrGifts: data.get("nbrGifts"),
       resetDefault: data.get("resetDefault"),
      },navigate)
      
    );
 
  };
  return (
    <div>
     <NavBar/>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Add Client
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                name="fullName"
                autoComplete="no"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                name="nbrGifts"
                label="Nbr Gifts"
                type="Number"
                id="nbrGifts"
                autoComplete="current-password"
              />
              <TextField
              margin="normal"
              required
              fullWidth
              name="resetDefault"
              label="Default Discount"
              type="Number"
              id="resetDefault"
              autoComplete="current-password"
            />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default AddClient;