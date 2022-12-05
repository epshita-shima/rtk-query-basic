import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { useEditUserMutation, useGetUsersByIdQuery } from "../services/users";

const EditForm = ({ data }) => {
  console.log(data.address.street);
  const {
    id,
    name: defaultName,
    username: defaultUserName,
    email: defaultEmail,
    phone: defaultPhone,
    website: defaultWebsite,
    address: {
      street: defaultStreet,
      suite: defaultSuite,
      city: defaultCity,
      zipcode: defaultZipcode,
      geo: { lat: defaultLat, lng: defaultLng },
    },
    company: {
        name: defaultCompanyName,
      catchPhrase: defaultCatchPhrase,
      bs: defaultBs,
    },
  } = data;

  const [editUser, { data: editedUser, isLoading, isSuccess }] =
    useEditUserMutation();
  const [name, setName] = useState(defaultName);
  const [username, setUserName] = useState(defaultUserName);
  const [email, setEmail] = useState(defaultEmail);
  const [phone, setPhone] = useState(defaultPhone);
  const [website, setwebsite] = useState(defaultWebsite);
  const [street, setStreet] = useState(defaultStreet);
  const [suite, setSuite] = useState(defaultSuite);
  const [city, setCity] = useState(defaultCity);
  const [zipcode, setZipcode] = useState(defaultZipcode);
  const [companyName, setCompanyName] = useState(defaultCompanyName);
  const [catchPhrase, setCatchPhrase] = useState(defaultCatchPhrase);
  const [bs, setBs] = useState(defaultBs);
  const [lat, setLat] = useState(defaultLat);
  const [lng, setLng] = useState(defaultLng);

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser({
      id,
      data: {
        name,
        username,
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
      },
    });
  };
  return (
    <div>
      <Container sx={{ textAlign: "center" }}>
        <h2>Edit User Info</h2>
      </Container>
      <form action="" onSubmit={handleSubmit}>
        <Grid spacing={3} container sx={{ marginTop: 2 }}>
          <Grid sm={3}>
            <Paper sx={{ padding: 2, textAlign: "center" }}>
              <TextField
                required
                id="outlined-required"
                label="Name"
                defaultValue={defaultName}
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
                defaultValue={defaultUserName}
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
                defaultValue={defaultEmail}
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
                defaultValue={defaultPhone}
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
                defaultValue={defaultWebsite}
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
                defaultValue={defaultStreet}
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
                defaultValue={defaultSuite}
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
                defaultValue={defaultCity}
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
                label="Zipcode"
                defaultValue={defaultZipcode}
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
                label="Lat"
                defaultValue={defaultLat}
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
                label="Lng"
                defaultValue={defaultLng}
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
                label="CompaneName"
                defaultValue={defaultCompanyName}
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
                label="CatchPhrase"
                defaultValue={defaultCatchPhrase}
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
                label="Bs"
                defaultValue={defaultBs}
                onChange={(e) => {
                  setBs(e.target.value);
                }}
              />
            </Paper>
          </Grid>
        </Grid>
        <Button
          //   disabled={isLoading}
          type="submit"
          sx={{ marginTop: 2 }}
          variant="contained"
        >
          Submit
        </Button>

        {isSuccess && <p>data edited successfully</p>}
      </form>
    </div>
  );
};

export default EditForm;
