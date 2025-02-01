import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation to get the current path

const HeaderFooter = () => {
    const location = useLocation(); // Get the current location

    return (
        <div>
            {/* Header Section */}
            <header>
                <h1>Your Name</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" style={{ textDecoration: location.pathname === '/' ? 'underline' : 'none' }}>
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio" style={{ textDecoration: location.pathname === '/portfolio' ? 'underline' : 'none' }}>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" style={{ textDecoration: location.pathname === '/contact' ? 'underline' : 'none' }}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/resume" style={{ textDecoration: location.pathname === '/resume' ? 'underline' : 'none' }}>
                                Resume
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Footer Section */}
            <footer>
                <p>Connect with me:</p>
                <ul>
                    <li>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default HeaderFooter;