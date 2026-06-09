import classNames from "classnames";
import "./Task.css";
import { useStore } from "../store";
import React from "react";

const STATUS = "PLANNED";

export default function Task({ title, gstate }) {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title),
  );

  if (task.state !== gstate) {
    return null;
  }
  return (
    <div className="task">
      <div>{task.title}</div>
      <div className="bottomwrapper">
        <div></div>
        <div className={classNames("status", STATUS)}>{task.state}</div>
      </div>
    </div>
  );
}
