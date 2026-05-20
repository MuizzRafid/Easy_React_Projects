import { useState } from "react";
import { Users } from "./components/Users.jsx";
import "./App.css";
import { NewUser } from "./components/NewUser.jsx";
import { UserContext } from "./context/UserContext.jsx";

function App() {
  const [users, setUser] = useState([
    {
      id: 1,
      username: "anisul",
    },
    {
      id: 2,
      username: "Alex",
    },
  ]);

  return (
    <>
      <UserContext.Provider value={{ users, setUser }}>
        <NewUser />
        <Users />
      </UserContext.Provider>
    </>
  );
}

export default App;
