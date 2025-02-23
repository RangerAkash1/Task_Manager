import React, { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import { getTasks, saveTasks } from "./utils/storage";

const App = () => {
  const [tasks, setTasks] = useState(getTasks());
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return <Dashboard tasks={tasks} setTasks={setTasks} search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />;
};

export default App;
