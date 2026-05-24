import { useState } from "react";
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
      <div className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:p-6">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 sm:flex-row sm:items-end"
        >
          <div className="flex-1">
            <h1 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              Registration
            </h1>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <input
            type="submit"
            value="save"
            className="w-full cursor-pointer rounded-md bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
          />
        </form>
      </div>
    </>
  );
};
