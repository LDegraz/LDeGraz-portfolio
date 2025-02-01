import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderFooter = () => {
    return (
        <div>
            <header>
                <h1>Your Name</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
                                About Me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active-link" : "")}>
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/resume" className={({ isActive }) => (isActive ? "active-link" : "")}>
                                Resume
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <footer>
                <p>Connect with me:</p>
                <ul>
                    <li><a href="https://github.com/LDegraz" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </footer>
        </div>
    );
};

export default HeaderFooter;
