import React from "react";

function TaskItem({ task, index, markTaskCompleted, deleteTask }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <span onClick={() => markTaskCompleted(index)}>{task.text}</span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
}

export default TaskItem;
