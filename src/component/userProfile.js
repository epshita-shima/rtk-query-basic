import React from 'react'
import { useGetUsersByIdQuery } from '../services/users'
import { useParams } from 'react-router-dom';
import { Grid, Paper } from '@mui/material';
const UserProfile = () => {
  const {userId}=useParams();
  const {data,isLoading}=useGetUsersByIdQuery(userId)
  console.log(useGetUsersByIdQuery(userId))

  if(isLoading){
    return <p>Loading....</p>
  }
  return (
    <div >
      <Grid sm={2} item>
                <Paper sx={{padding:2, marginTop:2,textAlign:'center'}}>

                    <h4>{data.name}</h4>
                    <h5>{data.email}</h5>
                </Paper>
               </Grid>
    </div>
  )
}

export default UserProfile
