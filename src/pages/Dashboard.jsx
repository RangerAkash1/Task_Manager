import React, { useState } from "react";
import TaskFormModal from "../components/TaskFormModel";

import TaskList from "../components/TaskList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Dashboard.css";
import noTaskImage from "../assets/img/no-task.png";



const Dashboard = ({ tasks, setTasks, search, setSearch, theme, setTheme }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Remaining Time");
  const [isModalOpen, setIsModalOpen] = useState(false); // Controls the Task Modal

  // Function to filter tasks based on the selected category
  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Today") return task.dueDate === new Date().toISOString().split("T")[0];
    if (activeFilter === "Week") return task.dueThisWeek;
    if (activeFilter === "Important") return task.priority === "High";
    if (activeFilter === "Completed") return task.completed;
    return false;
  });

  return (
    <>
      <Header search={search} setSearch={setSearch} theme={theme} setTheme={setTheme} />

      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="task-filters">
            {["All", "Today", "Week", "Important", "Completed"].map((btn) => (
              <button 
                key={btn} 
                className={`filter-btn ${activeFilter === btn ? "active" : ""}`}
                onClick={() => setActiveFilter(btn)}
              >
                {btn}
              </button>
            ))}
            <div className="sort-section">
              <span>Sort by:</span>
              <select className="sort-dropdown" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option>Remaining Time</option>
                <option>Priority</option>
              </select>
            </div>
          </div>

          <div className="task-section">
            {filteredTasks.length > 0 ? (
              <TaskList tasks={filteredTasks} setTasks={setTasks} search={search} />
            ) : (
              <div className="no-tasks">
              <img src={noTaskImage} alt="No tasks" className="no-tasks-image" />
                <p>Yaay! No tasks left for {activeFilter.toLowerCase()}!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Add Task Button */}
      <button className="add-task-btn" onClick={() => setIsModalOpen(true)}>+</button>

      {/* Task Creation Modal */}
      {isModalOpen && <TaskFormModal setTasks={setTasks} onClose={() => setIsModalOpen(false)} />}

      <Footer />
    </>
  );
};

export default Dashboard;
