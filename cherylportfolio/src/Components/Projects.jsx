
import React from 'react';
import '../Styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "TravelBuddy API",
      description: "Backend lead for collaborative travel planning app with user authentication and group management",
      tech: ["React", "Flask", "SQLAlchemy", "REST API"],
      role: "Backend Lead",
      github: "https://github.com/Mathu025/react-flask-project",
      demo: "https://react-flask-project-5.onrender.com"
    },
    {
      id: 2,
      title: "Smart Goal Planner",
      description: "React app for tracking financial goals with progress charts and deadline alerts",
      tech: ["React", "JavaScript", "CSS3", "JSON Server"],
      role: "Full-Stack Developer",
      github: "https://github.com/cherylmbani/phase-2-week-2-code-challenge-sgp",
      demo: "https://elaborate-cocada-1d756a.netlify.app/goals"
    },
    {
      id: 3,
      title: "SheCare.Africa",
      description: "Frontend development for real company platform supporting women's initiatives",
      tech: ["React", "HTML5", "CSS3", "Git"],
      role: "Frontend Contributor",
      github: "https://github.com/cassyomondi/SheCare-ECI-Project/tree/main",
      demo: "#"
    },
    {
      id: 4,
      title: "Event Guest List Manager",
      description: "Interactive web application for managing event guests and RSVP status tracking",
      tech: ["HTML5", "CSS3", "JavaScript"],
      role: "Frontend Developer",
      github: "https://github.com/cherylmbani/Event-Guest_List-Manager",
      demo: "#"
    },
    {
      id: 5,
      title: "Herb Hero",
      description: "Educational website about medicinal herbs with dynamic filtering and user contributions",
      tech: ["HTML5", "CSS3", "JavaScript", "JSON Server"],
      role: "Frontend Developer",
      github: "https://github.com/cherylmbani/phase-1-javascript-project-mode",
      demo: "#"
    },
    {
      id: 6,
      title: "Mentorship Manager CLI",
      description: "Python command-line application for managing mentorship programs with database integration",
      tech: ["Python", "SQLAlchemy", "Click", "SQLite"],
      role: "Backend Developer",
      github: "https://github.com/cherylmbani/phase-3-project-mentorship-manager",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-role">{project.role}</p>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.tech.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              {project.demo !== "#" && (
                <a href={project.demo} className="btn btn-demo" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;