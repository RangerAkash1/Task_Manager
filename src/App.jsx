import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./components/About"; // Import About component
import Footer from "./components/Footer"; // Ensure Footer is used globally
import { getTasks, saveTasks } from "./utils/storage";

const App = () => {
  const [tasks, setTasks] = useState(getTasks());
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return (
    <Router>
      <div className={theme}>
        <Routes>
          {/* Dashboard (Home) Route */}
          <Route 
            path="/" 
            element={
              <Dashboard 
                tasks={tasks} 
                setTasks={setTasks} 
                search={search} 
                setSearch={setSearch} 
                filter={filter} 
                setFilter={setFilter} 
                theme={theme} 
                setTheme={setTheme}
              />
            } 
          />
          {/* About Page Route */}
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer /> {/* Footer will be visible on all pages */}
      </div>
    </Router>
  );
};

export default App;
