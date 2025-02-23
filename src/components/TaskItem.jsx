import React from "react";

const TaskItem = ({ task, setTasks }) => {
  const toggleComplete = () => {
    setTasks((prev) => prev.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = () => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <div className="p-4 bg-white shadow rounded mb-2">
      <h3 className="font-bold">{task.title} ({task.priority})</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <button className="p-2 bg-green-500 text-white rounded mr-2" onClick={toggleComplete}>{task.completed ? "Undo" : "Complete"}</button>
      <button className="p-2 bg-red-500 text-white rounded" onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TaskItem;