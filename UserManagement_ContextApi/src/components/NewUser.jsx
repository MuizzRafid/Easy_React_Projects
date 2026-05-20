import React, { useState, useContext } from "react";
import { useUserContext } from "../hook/useUserContext";

export const NewUser = () => {
  const { users, setUser } = useUserContext();
  const [userName, setUserName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { id: new Date().getTime().toString(), username: userName };
    addNewUser(newUser);
    setUserName("");
  };

  const addNewUser = (nUser) => {
    setUser([...users, nUser]);
  };

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <h1>Registration</h1>
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input type="submit" value="save" />
        </form>
      </div>
    </>
  );
};
