import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import UserContext from './UserContext'

function UserView() {
    let params = useParams()
    let userData = useContext(UserContext)
  return (
    <>
    <div>UserView {+params.id+1}</div>
    <h1>{userData.users[params.id].name}</h1>
    <h1>{userData.users[params.id].position}</h1>
    <h1>{userData.users[params.id].office}</h1>
    <h1>{userData.users[params.id].age}</h1>
    <h1>{userData.users[params.id].salary}</h1>
    <h1>{userData.users[params.id].startDate}</h1>
    </>
  )
}

export default UserView