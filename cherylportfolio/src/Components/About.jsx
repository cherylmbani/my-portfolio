import React from 'react';
import '../Styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          
          {/* Simple Section Header */}
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="divider"></div>
            <p className="section-subtitle">
              Aspiring software engineer <span className="highlight">eager to learn</span> and create impact
            </p>
          </div>

          <div className="about-grid">
            {/* Main Content */}
            <div className="about-text">
              <div className="text-card">
                <div className="card-header">
                  <h3>Cheryl Mbani</h3>
                  <p className="role-tag">Computer Science Student</p>
                </div>

                <div className="card-content">
                  <p className="intro-text">
                    I'm a passionate computer science student with hands-on experience in full-stack development, 
                    eager to apply my skills to solve real-world problems through technology.
                  </p>

                  <div className="story-section">
                    <h4>My Journey</h4>
                    <p>
                      My interest in technology began with Geographic Information Systems (GIS), where working with tools like 
                      <strong> ArcGIS</strong> and <strong>QGIS</strong> sparked my curiosity about how software can transform 
                      complex data into meaningful solutions. This inspired me to pursue computer science and develop my 
                      programming skills.
                    </p>
                    <p>
                      Through my coursework and personal projects, I've built applications across different domains, 
                      from data visualization tools to web applications, constantly expanding my technical capabilities 
                      and problem-solving approach.
                    </p>
                  </div>

                  <div className="passion-section">
                    <h4>What I'm Seeking</h4>
                    <p>
                      I'm looking for an internship where I can contribute my development skills while learning from 
                      experienced engineers. I'm excited to tackle new challenges, collaborate on meaningful projects, 
                      and grow as a software developer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Interests */}
            <div className="skills-interests">
              {/* Skills List */}
              <div className="skills-card">
                <h3>Tech Stack</h3>
                <div className="skills-grid">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Flask</span>
                  <span className="skill-tag">HTML/CSS</span>
                  <span className="skill-tag">SQL</span>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="interests-card">
                <h3>My Interests</h3>
                <div className="interests-grid">
                  <div className="interest-item">
                    <span>💻 Full-Stack Development</span>
                  </div>
                  <div className="interest-item">
                    <span>🎨 UI/UX Design</span>
                  </div>
                  <div className="interest-item">
                    <span>🚀 Web Performance</span>
                  </div>
                  <div className="interest-item">
                    <span>💡 Problem Solving</span>
                  </div>
                  <div className="interest-item">
                    <span>📊 Data Visualization</span>
                  </div>
                  <div className="interest-item">
                    <span>🔍 Learning New Technologies</span>
                  </div>
                </div>
              </div>

              {/* Project Experience */}
              <div className="domains-card">
                <h3>Areas of Exploration</h3>
                <div className="domains-list">
                  <div className="domain-item">
                    <h4>Web Development</h4>
                    <p>Building responsive web applications with modern frameworks</p>
                  </div>
                  <div className="domain-item">
                    <h4>Data Solutions</h4>
                    <p>Creating applications that process and visualize complex data</p>
                  </div>
                  <div className="domain-item">
                    <h4>User-Centered Design</h4>
                    <p>Developing intuitive interfaces that prioritize user experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;