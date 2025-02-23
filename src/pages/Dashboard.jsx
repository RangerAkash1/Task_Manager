import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
//import ThemeToggle from "../components/ThemeToggle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Dashboard.css";

const Dashboard = ({ tasks, setTasks, search, setSearch, filter, setFilter, theme, setTheme }) => {
  return (
    <>
      {/* Fixed Header */}
      <Header search={search} setSearch={setSearch} theme={theme} setTheme={setTheme} />
      
      {/* Main Dashboard Content Wrapper */}
      <div className="dashboard-container">
        <div className="dashboard-content">
          {/* Search and Theme Toggle */}
          {/* <div className="top-controls">
            <input 
              type="text" 
              placeholder="Search all tasks" 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
              className="search-bar"
            />
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div> */}

          {/* Task Filters */}
          <div className="task-filters">
            {["All", "Today", "Week", "Important", "Completed", "High"].map((btn) => (
              <button key={btn} className="filter-btn">{btn}</button>
            ))}
            <select className="sort-dropdown">
              <option>Sort by: Remaining Time</option>
              <option>Sort by: Priority</option>
            </select>
          </div>

          {/* Task Form & Task List */}
          <div className="task-section">
            <TaskForm setTasks={setTasks} />
            <TaskList tasks={tasks} setTasks={setTasks} search={search} filter={filter} />
          </div>
        </div>
      </div>

      {/* Floating Add Task Button */}
      <button className="add-task-btn">+</button>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Dashboard;
