import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import "../css/About.css";
import profileImage from "../assets/img/profile.jpg";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                {/* Profile Image */}
                <img src={profileImage} alt="Akash Nazarkar" className="profile-img" />

                {/* Introduction */}
                <h2>About Me</h2>
                <p>
                    Hi, I'm <strong>Akash Nazarkar</strong>, a passionate full-stack developer with experience in React, 
                    Node.js, and modern web technologies. I love creating efficient and user-friendly applications.
                </p>

                {/* Social Links */}
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/akash-nazarkar-41b951239/" target="_blank" rel="noopener noreferrer">
                        <FiLinkedin /> Connect on LinkedIn
                    </a>
                    <a href="https://github.com/RangerAkash1" target="_blank" rel="noopener noreferrer">
                        <FiGithub /> Follow on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
