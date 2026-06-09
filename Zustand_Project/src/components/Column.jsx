import "../components/Column.css";
import { useStore } from "../store";
import Task from "./Task";
import { useMemo } from "react";
export default function Column({ state }) {
  const tasks = useStore((state) => state.tasks);

  const filtered = useMemo(
    () => tasks.filter((task) => task.state === state),
    [tasks, state],
  );
  return (
    <div className="column">
      <p>{state}</p>
      {tasks.map((task) => {
        return <Task title={task.title} key={task.title} gstate={state} />;
      })}
    </div>
  );
}
