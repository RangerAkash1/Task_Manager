import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setTasks, search, filter }) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed" && !task.completed) return false;
    if (filter === "upcoming" && new Date(task.dueDate) < new Date()) return false;
    if (filter === "overdue" && new Date(task.dueDate) >= new Date()) return false;
    if (search && !task.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="mt-4">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
};

export default TaskList;