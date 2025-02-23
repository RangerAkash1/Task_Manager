import React, { useState } from "react";

const TaskForm = ({ setTasks }) => {
  const [task, setTask] = useState({ title: "", description: "", dueDate: "", priority: "Medium" });

  const addTask = () => {
    setTasks((prev) => [...prev, { ...task, id: Date.now(), completed: false }]);
    setTask({ title: "", description: "", dueDate: "", priority: "Medium" });
  };

  return (
    <div className="mb-4 p-4 bg-white shadow rounded">
      <input className="p-2 border rounded w-full mb-2" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} placeholder="Title" />
      <input className="p-2 border rounded w-full mb-2" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} placeholder="Description" />
      <input className="p-2 border rounded w-full mb-2" type="date" value={task.dueDate} onChange={(e) => setTask({ ...task, dueDate: e.target.value })} />
      <select className="p-2 border rounded w-full mb-2" value={task.priority} onChange={(e) => setTask({ ...task, priority: e.target.value })}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button className="p-2 bg-blue-500 text-white rounded w-full" onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;