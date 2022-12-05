import React from "react";
import { useDeleteUserMutation, useGetUsersByIdQuery } from "../services/users";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Grid, Paper } from "@mui/material";
import { useEffect } from "react";
const UserProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetUsersByIdQuery(userId);
  const [deleteUser, {isSuccess }] = useDeleteUserMutation();

  console.log(useDeleteUserMutation());
  const handleDelete = () => {
    console.log("click", userId);
    if (userId) deleteUser(userId);
  };

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess,navigate]);

  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <div>
      <Grid sm={2} item>
        <Paper sx={{ padding: 2, marginTop: 2, textAlign: "center" }}>
          <h4>{data.name}</h4>
          <h5>{data.email}</h5>
          <Button onClick={handleDelete} variant="contained">
            Delete
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default UserProfile;
