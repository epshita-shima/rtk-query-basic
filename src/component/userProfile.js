import React from 'react'
import { useParams } from 'react-router-dom'
import {useGetUsersByIdQuery} from '../services/users'
const UserProfile = () => {
    const {id}=useParams()
    console.log(id)
  return (
    <div>
      user
    </div>
  )
}

export default UserProfile
