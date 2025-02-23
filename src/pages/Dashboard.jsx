import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Sidebar from "../components/Sidebar";
import ThemeToggle from "../components/ThemeToggle";

const Dashboard = ({ tasks, setTasks, search, setSearch, filter, setFilter, theme, setTheme }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <input 
            type="text" 
            placeholder="Search all tasks" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            className="p-2 rounded border"
          />
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
        <div className="flex gap-2 mb-4">
          {["All", "Today", "Week", "Important", "Completed", "High"].map((btn) => (
            <button key={btn} className="px-4 py-2 bg-blue-500 text-white rounded">{btn}</button>
          ))}
          <select className="p-2 border rounded">
            <option>Sort by: Remaining Time</option>
          </select>
        </div>
        <TaskForm setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} search={search} filter={filter} />
        <button className="fixed bottom-4 right-4 bg-blue-500 p-4 rounded-full shadow-lg">+</button>
      </div>
    </div>
  );
};

export default Dashboard;