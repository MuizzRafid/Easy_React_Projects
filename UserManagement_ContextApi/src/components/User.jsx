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
    <div className="rounded-lg bg-rose-100 p-4 shadow-sm ring-1 ring-rose-200 sm:p-5">
      <h2 className="break-words text-xl font-bold text-slate-700 sm:text-2xl">
        Id : {id}
      </h2>
      <h2 className="mt-2 break-words text-lg font-semibold text-slate-950 sm:text-xl">
        Name : {username}
      </h2>

      <button
        className="mt-4 w-full rounded-md bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700 sm:w-auto"
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
