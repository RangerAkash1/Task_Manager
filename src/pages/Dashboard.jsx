import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Dashboard = ({ tasks, setTasks, search, setSearch, filter, setFilter }) => {
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Task Manager</h1>
      <div className="flex justify-between mb-4">
        <input type="text" placeholder="Search tasks..." value={search} onChange={(e) => setSearch(e.target.value)} className="p-2 border rounded w-2/3" />
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="p-2 border rounded">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="upcoming">Upcoming</option>
          <option value="overdue">Overdue</option>
        </select>
      </div>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} search={search} filter={filter} />
    </div>
  );
};

export default Dashboard;
