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
              Where <span className="highlight">technology meets impact</span> across multiple domains
            </p>
          </div>

          <div className="about-grid">
            {/* Main Content */}
            <div className="about-text">
              <div className="text-card">
                <div className="card-header">
                  <h3>Cheryl Mbani</h3>
                  <p className="role-tag">Software Engineer</p>
                </div>

                <div className="card-content">
                  <p className="intro-text">
                    I'm a passionate software engineer who bridges the gap between 
                    <strong> geospatial technology</strong>, <strong>financial innovation</strong>, and 
                    <strong> agricultural solutions</strong>, creating applications that are both functional and impactful.
                  </p>

                  <div className="story-section">
                    <h4>My Journey</h4>
                    <p>
                      My interest in software engineering was sparked through Geographic Information Systems (GIS). 
                      Working with tools like <strong>ArcGIS</strong> and <strong>QGIS</strong> revealed how technology 
                      could solve complex spatial problems and visualize data in meaningful ways.
                    </p>
                    <p>
                      This foundation in spatial thinking expanded into financial technology and agricultural tech, 
                      where I discovered how software can transform traditional industries through innovation and 
                      data-driven solutions.
                    </p>
                  </div>

                  <div className="passion-section">
                    <h4>What Drives Me</h4>
                    <p>
                      I'm passionate about creating applications that solve real-world problems across multiple sectors. 
                      My unique background allows me to approach challenges from different perspectives, whether it's 
                      mapping spatial data, building financial tools, or developing agricultural solutions.
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

              {/* Interests */}
              <div className="interests-card">
                <h3>My Focus Areas</h3>
                <div className="interests-grid">
                  <div className="interest-item">
                    <span>🌍 Geospatial Tech</span>
                  </div>
                  <div className="interest-item">
                    <span>💳 Financial Tech</span>
                  </div>
                  <div className="interest-item">
                    <span>🌱 Agricultural Tech</span>
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
                </div>
              </div>

              {/* Domain Expertise */}
              <div className="domains-card">
                <h3>Domain Expertise</h3>
                <div className="domains-list">
                  <div className="domain-item">
                    <h4>FinTech</h4>
                    <p>Building financial applications, payment systems, and investment tools</p>
                  </div>
                  <div className="domain-item">
                    <h4>AgriTech</h4>
                    <p>Developing solutions for farming, crop monitoring, and agricultural data</p>
                  </div>
                  <div className="domain-item">
                    <h4>Geo-Spatial</h4>
                    <p>Creating mapping applications and location-based services</p>
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