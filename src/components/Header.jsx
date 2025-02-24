import React, { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import "../css/Header.css";
import { useEffect } from "react";

const Header = ({ search, setSearch, theme, setTheme }) => {
    const [darkMode, setDarkMode] = useState(theme === "dark");

    // Apply the theme when the component mounts
    useEffect(() => {
        document.body.classList.toggle("dark-theme", darkMode);
    }, [darkMode]);

    const handleThemeToggle = () => {
        const newTheme = darkMode ? "light" : "dark";
        
        setTheme(newTheme);
        setDarkMode(!darkMode);

        // Update body class for theme
        document.body.classList.toggle("dark-theme", newTheme === "dark");

        // Save the theme preference in localStorage
        localStorage.setItem("theme", newTheme);
    };

    return (
        <div className="nav-bar">
            <div className="left-box">
                <button className="menu-button">
                    <FiMenu />
                </button>
                <div className="logo-box">
                    <a href="/" className="logo">
                        <div className="logo-img">✓</div>
                        <h1>Todo List</h1>
                    </a>
                </div>
            </div>
            <div className="search-box">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="search-button">
                    <FiSearch />
                </button>
            </div>
            <div className="toggle-switch">
                <input
                    type="checkbox"
                    id="theme-toggle"
                    checked={darkMode}
                    onChange={handleThemeToggle}
                />
                <label htmlFor="theme-toggle" className="toggle-label">
                    <span className="toggle-icon toggle-icon-light"></span>
                    <span className="toggle-icon toggle-icon-dark"></span>
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    );
};

export default Header;
