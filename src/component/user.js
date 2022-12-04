import { Button, Grid, Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {useGetAllUsersQuery} from '../services/users'
const User = () => {
    const {data,isLoading,isError}=useGetAllUsersQuery()
    console.log(useGetAllUsersQuery())
if(isLoading){
    return <p>Loading.....</p>
}
if(isError){
    return <p>Something went worng!</p>
}
  return (
    <Grid spacing={4} container>
        {
            data.map(({name,id,email})=>(
               <Grid sm={3} item>
                <Paper sx={{padding:2}}>
                    <h4>{name}</h4>
                    <h5>{email}</h5>
                    <h5>{id}</h5>
                    <Button component={Link} to={`users/${id}`} variant='contained'>View Profile</Button>
                </Paper>
               </Grid>
            ))
        }
    </Grid>
  )
}

export default User
