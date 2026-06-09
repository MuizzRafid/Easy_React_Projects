import classNames from "classnames";
import "./Task.css";
import { useStore } from "../store";

export default function Task({ title, gstate }) {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title),
  );
  const deleteTask = useStore((store) => store.deleteTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);

  if (!task || task.state !== gstate) {
    return null;
  }

  return (
    <div
      className="task"
      draggable
      onDragStart={() => {
        setDraggedTask(task.title);
      }}
    >
      <div>{task.title}</div>
      <div className="bottomwrapper">
        <div>
          <button
            onClick={() => deleteTask(task.title)}
            className={classNames(task.state, "dltButton", "status")}
          >
            Delete
          </button>
        </div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
}
