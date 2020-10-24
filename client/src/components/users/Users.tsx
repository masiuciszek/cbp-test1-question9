import { useQuery } from "@apollo/client"
import React from "react"
import { USERS_QUERY } from "../../ClientGql"
import User from "./User"

interface UsersQuery {
  users: User[]
}

const Users = () => {
  const { loading, error, data } = useQuery<UsersQuery>(USERS_QUERY)
  if (loading) return <p>...loading</p>
  if (error) return <p>...Error</p>
  return (
    <div>
      {data?.users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  )
}
export default Users
