import { useQuery } from "@apollo/client"
import React from "react"
import { USERS_QUERY } from "../../ClientGql"
import { styled } from "../Layout"
import User from "./User"

interface UsersQuery {
  users: User[]
}

interface Props {}

const UsersWrapper = styled("div")`
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`

const Users: React.FC<Props> = () => {
  const { loading, error, data } = useQuery<UsersQuery>(USERS_QUERY)
  if (loading) return <p>...loading</p>
  if (error) return <p>...Error</p>

  return (
    <UsersWrapper>
      {data?.users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </UsersWrapper>
  )
}
export default Users
