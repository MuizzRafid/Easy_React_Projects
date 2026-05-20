import React from "react";
import { User } from "./User";
import { useUserContext } from "../hook/useUserContext";

export function Users() {
  const { users } = useUserContext();
  return (
    <div className="users">
      {users.map((user) => {
        return <User key={user.id} user={user}></User>;
      })}
    </div>
  );
}

export default Users;
