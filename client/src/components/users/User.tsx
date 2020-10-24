import React from "react"

interface UserProps {
  user: User
}

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <div>
      <p>{user.firstName}</p>
    </div>
  )
}
export default User
