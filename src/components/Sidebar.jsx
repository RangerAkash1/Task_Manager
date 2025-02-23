import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 h-screen">
      <h2 className="text-xl font-bold">Todo List</h2>
      <nav>
        <h3 className="mt-4">Home</h3>
        <ul>
          <li>All</li>
          <li>Today</li>
          <li>Week</li>
          <li>Important</li>
          <li>Completed</li>
        </ul>
        <h3 className="mt-4">Projects</h3>
        <ul>
          <li>All Projects</li>
          <li>Starred Projects</li>
        </ul>
        <h3 className="mt-4">Notes</h3>
        <ul>
          <li>All Notes</li>
          <li>Starred Notes</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;