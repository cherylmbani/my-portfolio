import React from 'react';
import '../Styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      {/* Animated Background Elements */}
      <div className="floating-elements">
        <div className="float-element float-1"></div>
        <div className="float-element float-2"></div>
        <div className="float-element float-3"></div>
        <div className="float-element float-4"></div>
      </div>

      <div className="container">
        <div className="about-content">
          
          {/* Animated Section Header */}
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-char">A</span>
              <span className="title-char">b</span>
              <span className="title-char">o</span>
              <span className="title-char">u</span>
              <span className="title-char">t</span>
              <span className="title-space"></span>
              <span className="title-char">M</span>
              <span className="title-char">e</span>
            </h2>
            <div className="animated-divider">
              <div className="divider-dot"></div>
              <div className="divider-line"></div>
              <div className="divider-dot"></div>
            </div>
            <p className="section-subtitle">
              Where <span className="gradient-text">GIS meets code</span> to create meaningful solutions
            </p>
          </div>

          <div className="about-grid">
            {/* Main Content */}
            <div className="about-text">
              <div className="text-card glass-card">
                <div className="card-header">
                  <div className="avatar pulse-avatar">CM</div>
                  <div className="header-text">
                    <h3>Cheryl Mbani</h3>
                    <p className="role-tag">Software Engineer</p>
                  </div>
                </div>

                <div className="card-content">
                  <p className="intro-text">
                    I'm a passionate software engineer who bridges the gap between 
                    <span className="highlight-word"> geospatial technology</span> and modern web development, 
                    creating solutions that are both functional and impactful.
                  </p>

                  <div className="story-section">
                    <h4 className="section-heading">
                      <span className="heading-icon">🗺️</span>
                      My Journey
                    </h4>
                    <p>
                      My interest in software engineering was sparked through Geographic Information Systems (GIS). 
                      Working with tools like <strong className="tool-name">ArcGIS</strong> and <strong className="tool-name">QGIS</strong> revealed how technology 
                      could solve complex spatial problems and visualize data in meaningful ways.
                    </p>
                    <p>
                      This exposure to GIS tools and spatial analysis made me curious about the underlying 
                      technology. I realized that behind every powerful GIS application was robust software 
                      engineering, which led me to dive deep into programming and web development.
                    </p>
                  </div>

                  <div className="passion-section">
                    <h4 className="section-heading">
                      <span className="heading-icon">⚡</span>
                      What Drives Me
                    </h4>
                    <p>
                      I'm passionate about creating applications that solve real-world problems. 
                      My background in spatial thinking gives me a unique perspective on data visualization 
                      and user experience design.
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated Stats */}
              <div className="stats-grid">
                <div className="stat-item glow-stat">
                  <div className="stat-number" data-count="15">0</div>
                  <div className="stat-label">Projects Built</div>
                </div>
                <div className="stat-item glow-stat">
                  <div className="stat-number" data-count="5">0</div>
                  <div className="stat-label">Technologies</div>
                </div>
                <div className="stat-item glow-stat">
                  <div className="stat-number">∞</div>
                  <div className="stat-label">Creativity</div>
                </div>
              </div>
            </div>

            {/* Skills & Interests */}
            <div className="skills-interests">
              {/* Rotating Skills Orb */}
              <div className="skills-orb">
                <div className="orb-core">
                  <span>Tech Stack</span>
                </div>
                <div className="orb-item orb-1">
                  <span>React</span>
                </div>
                <div className="orb-item orb-2">
                  <span>JavaScript</span>
                </div>
                <div className="orb-item orb-3">
                  <span>Python</span>
                </div>
                <div className="orb-item orb-4">
                  <span>Flask</span>
                </div>
                <div className="orb-item orb-5">
                  <span>HTML/CSS</span>
                </div>
              </div>

              {/* Interactive Interests */}
              <div className="interests-card glass-card">
                <h3>My Interests</h3>
                <div className="interests-grid">
                  <div className="interest-item">
                    <div className="interest-icon">🌍</div>
                    <span>Geospatial Tech</span>
                  </div>
                  <div className="interest-item">
                    <div className="interest-icon">🎨</div>
                    <span>UI/UX Design</span>
                  </div>
                  <div className="interest-item">
                    <div className="interest-icon">🚀</div>
                    <span>Web Performance</span>
                  </div>
                  <div className="interest-item">
                    <div className="interest-icon">💡</div>
                    <span>Problem Solving</span>
                  </div>
                </div>
              </div>

              {/* Fun Code Facts */}
              <div className="fun-facts glass-card">
                <h3>Code & Coffee</h3>
                <div className="facts-list">
                  <div className="fact-item">
                    <span className="fact-emoji">☕</span>
                    <span>Best ideas come with coffee</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-emoji">🌙</span>
                    <span>Night owl coder</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-emoji">🎵</span>
                    <span>Lofi coding sessions</span>
                  </div>
                  <div className="fact-item">
                    <span className="fact-emoji">🔍</span>
                    <span>Love debugging challenges</span>
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