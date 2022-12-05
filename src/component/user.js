import { Button, CssBaseline, Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { useGetAllUsersQuery } from "../services/users";
const User = () => {
  const { data, isLoading, isError } = useGetAllUsersQuery();
  console.log(useGetAllUsersQuery());
  
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  if (isError) {
    return <p>Something went worng!</p>;
  }
  return (
    <div>
      <CssBaseline>
        <Container>
          <Button
            sx={{ marginTop: 2, marginBottom: 2 }}
            component={Link}
            to="adduser"
            variant="contained"
          >
            + Add User
          </Button>
        </Container>
      </CssBaseline>

      <Grid spacing={4} container>
        {data.map(({ name, id, email, address }) => (
          <Grid sm={3} item>
            <Paper sx={{ padding: 2 }}>
              <h4>{name}</h4>
              <h5>{email}</h5>
              <p>{address.street}</p>
              <Button component={Link} to={`users/${id}`} variant="contained">
                View
              </Button>
              <Button
                component={Link}
                to={`user/${id}`}
                sx={{ marginLeft: 1 }}
                variant="contained"
              >
                Edit
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default User;
