import React, { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
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
    <div className={theme}>
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
    </div>
  );
};

export default App;