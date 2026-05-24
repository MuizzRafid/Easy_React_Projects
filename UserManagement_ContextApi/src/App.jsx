import { useState } from "react";
import { Users } from "./components/Users.jsx";
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
        <main className="min-h-screen bg-slate-100 px-4 py-6 sm:px-6 lg:px-8">
          <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 sm:gap-8">
            <NewUser />
            <Users />
          </section>
        </main>
      </UserContext.Provider>
    </>
  );
}

export default App;
