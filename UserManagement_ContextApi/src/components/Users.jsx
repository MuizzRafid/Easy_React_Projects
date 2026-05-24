import { User } from "./User";
import { useUserContext } from "../hook/useUserContext";

export function Users() {
  const { users } = useUserContext();
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => {
        return <User key={user.id} user={user}></User>;
      })}
    </div>
  );
}

export default Users;
