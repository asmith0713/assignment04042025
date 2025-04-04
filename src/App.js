import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (event) => {
    event.preventDefault();
    const taskText = event.target.elements.taskInput.value.trim();
    if (taskText) {
      setTasks([...tasks, { text: taskText, completed: false }]);
      event.target.reset();
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>To-Do List Planner</h1>
      <form onSubmit={addTask}>
        <input type="text" name="taskInput" placeholder="Enter new task..." />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            {task.text}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
