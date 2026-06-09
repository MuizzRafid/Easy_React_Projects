import "../components/Column.css";
import { useStore } from "../store";
import Task from "./Task";
import { useMemo, useState } from "react";
export default function Column({ state }) {
  const [text, setText] = useState("");
  const [Open, setOpen] = useState(false);
  const tasks = useStore((state) => state.tasks);

  const filtered = useMemo(
    () => tasks.filter((task) => task.state === state),
    [tasks, state],
  );

  const draggedTask = useStore((store) => store.draggedTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const addTask = useStore((store) => store.addTask);
  const moveTask = useStore((store) => store.moveTask);
  return (
    <div
      className="column"
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={() => {
        moveTask(draggedTask, state);
        setDraggedTask(null);
      }}
    >
      <div className="titleWrapper">
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {filtered.map((task) => {
        return <Task title={task.title} key={task.title} gstate={state} />;
      })}

      {Open && (
        <div className="Modal">
          <div className="modalContent">
            <input onChange={(e) => setText(e.target.value)} value={text} />
            <button
              onClick={() => {
                if (text === "") {
                  setOpen(false);
                  return alert("please write some text");
                } else {
                  addTask(text, state);
                  setText("");
                  setOpen(false);
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
