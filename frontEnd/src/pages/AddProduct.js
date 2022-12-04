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
import { addProduct } from "../redux/Actions/ProductAction";
import {useNavigate} from "react-router-dom"
import NavBar from "../components/NavBar";

const AddProduct = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const theme = createTheme();
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    console.log({
      label: data.get("label"),
      priceTtc: data.get("priceTtc"),
      inStock: data.get("inStock"),
      isGift: data.get("isGift"),
    });
   dispatch(
    addProduct({
      label: data.get("label"),
      priceTtc: data.get("priceTtc"),
      inStock: data.get("inStock"),
      isGift: data.get("isGift"),
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
              Add Product
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
                id="Label"
                label="Label"
                name="label"
                autoComplete="no"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                name="priceTtc"
                label="Price including taxes"
                type="Number"
                id="priceTtc"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="inStock"
                label="In stock"
                type="Number"
                id="inStock"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="isGift"
                label="Is gift"
                type="Boolean"
                id="isGift"
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

export default AddProduct;