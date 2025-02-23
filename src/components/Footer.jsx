import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import "../css/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Task Manager. All rights reserved.</p>
            <div className="footer-links">
                <a href="/about">About</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="https://github.com/RangerAkash1" target="_blank" rel="noopener noreferrer">
                    <FiGithub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/akash-nazarkar-41b951239/" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin /> LinkedIn
                </a>
            </div>
        </footer>
    );
};

export default Footer;
