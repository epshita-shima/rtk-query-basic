import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetUsersByIdQuery } from '../services/users';
import EditForm from './editForm'

const EditUser = () => {
    const {userId}=useParams();
    const {data,isLoading}=useGetUsersByIdQuery(userId)
    console.log(data)
    let content=null;

    if(isLoading){
        content=<div>Loading...</div>
    }
    if(!isLoading && data?.id){
        content=<EditForm data={data}></EditForm>
    }
  return (
    <div>
      {content}
    </div>
  )
}

export default EditUser
