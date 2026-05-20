import React, { useContext } from "react";
import { useUserContext } from "../hook/useUserContext";

export function User({ user }) {
  const { users, setUser } = useUserContext();
  const { id, username } = user;
  console.log(user);

  const handleDelete = (id) => {
    const newUser = users.filter((user) => {
      return user.id != id;
    });
    setUser(newUser);
  };
  return (
    <div className="user">
      <h2 className="user-id">Id : {id}</h2>
      <h2 className="user-name">Name : {username}</h2>
      <br />

      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
