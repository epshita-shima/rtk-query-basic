import { Button, CssBaseline, Grid, Paper, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useAddUserMutation } from "../services/users";

const AddUser = () => {
  const [addUser, { data, isLoading, isSuccess }] = useAddUserMutation();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setwebsite] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [bs, setBs] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const resetForm = () => {
    setName("");
    setUserName("");
    setEmail("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({
      name,
      userName,
      email,
      phone,
      website,
      address: {
        street,
        suite,
        city,
        zipcode,
        geo: {
          lat,
          lng,
        },
      },
      company: {
        name,
        catchPhrase,
        bs,
      },
    });
    resetForm();
  };
  return (
    <div>
      <Container sx={{ textAlign: "center" }}>
        <h2>Add User Info</h2>
      </Container>
      <form action="" onSubmit={handleSubmit}>
        <Grid spacing={3} container sx={{ marginTop: 2 }}>
          <Grid sm={3}>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <TextField
                required
                id="outlined-required"
                label="Name"
                defaultValue="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Paper>
          </Grid>
          <Grid sm={3}>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <TextField
                required
                id="outlined-required"
                label="Username"
                defaultValue="Username"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </Paper>
          </Grid>
          <Grid sm={3}>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <TextField
                required
                id="outlined-required"
                label="Email"
                defaultValue="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Paper>
          </Grid>
          <Grid sm={3}>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <TextField
                required
                id="outlined-required"
                label="Phone"
                defaultValue="Phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Paper>
          </Grid>
          <Grid sm={3}>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <TextField
                required
                id="outlined-required"
                label="Website"
                defaultValue="Website"
                onChange={(e) => {
                  setwebsite(e.target.value);
                }}
              />
            </Paper>
          </Grid>
          <Grid sm={3}>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <TextField
                required
                id="outlined-required"
                label="Street"
                defaultValue="Street"
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
              />
            </Paper>
          </Grid>
          <Grid sm={3}>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <TextField
                required
                id="outlined-required"
                label="Suite"
                defaultValue="Suite"
                onChange={(e) => {
                  setSuite(e.target.value);
                }}
              />
            </Paper>
          </Grid>
          <Grid sm={3}>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <TextField
                required
                id="outlined-required"
                label="City"
                defaultValue="City"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </Paper>
          </Grid>
          <Grid sm={3}>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Zipcode"
                onChange={(e) => {
                  setZipcode(e.target.value);
                }}
              />
            </Paper>
          </Grid>
          <Grid sm={3}>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="lat"
                onChange={(e) => {
                  setLat(e.target.value);
                }}
              />
            </Paper>
          </Grid>
          <Grid sm={3}>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="lng"
                onChange={(e) => {
                  setLng(e.target.value);
                }}
              />
            </Paper>
          </Grid>
          <Grid sm={3}>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Company name"
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
              />
            </Paper>
          </Grid>
          <Grid sm={3}>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Catch Phrase"
                onChange={(e) => {
                  setCatchPhrase(e.target.value);
                }}
              />
            </Paper>
          </Grid>
          <Grid sm={3}>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="bs"
                onChange={(e) => {
                  setBs(e.target.value);
                }}
              />
            </Paper>
          </Grid>
        </Grid>
        <Button
          disabled={isLoading}
          type="submit"
          sx={{ marginTop: 2 }}
          variant="contained"
        >
          Submit
        </Button>

        {isSuccess && <p>data added successfully</p>}
      </form>
    </div>
  );
};

export default AddUser;
