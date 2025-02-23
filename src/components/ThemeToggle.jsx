import React from "react";

const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <button 
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
      className="p-2 bg-gray-700 text-white rounded"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;