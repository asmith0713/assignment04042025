import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, markTaskCompleted, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          markTaskCompleted={markTaskCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
