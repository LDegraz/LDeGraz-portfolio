import React from 'react';
import '../App.css';
import readmeImage from '../assets/readme.png';

const projects = [
    {
        title: "README.md Generator",
        image: readmeImage,
        github: "https://github.com/LDegraz/README-generator.git",
    },
    {
        title: "Placeholder Project",
        image: readmeImage,
        github: "https://github.com/LDegraz/README-generator.git",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div className="portfolio-item" key={index}>
                        <img src={project.image} alt={project.title} className="portfolio-image" />
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                            {project.title}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
