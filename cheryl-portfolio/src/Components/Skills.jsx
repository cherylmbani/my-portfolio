import React from 'react';
import '../Styles/Skills.css';

const Skills = () => {
  const skillsData = {
    frontend: [
      { name: 'React', level: 90, icon: '⚛️', color: '#61DAFB' },
      { name: 'JavaScript', level: 80, icon: '🟨', color: '#F7DF1E' },
      { name: 'HTML5', level: 90, icon: '🌐', color: '#E34F26' },
      { name: 'CSS3', level: 88, icon: '🎨', color: '#1572B6' }
    ],
    backend: [
      { name: 'Python', level: 95, icon: '🐍', color: '#3776AB' },
      { name: 'Flask', level: 95, icon: '🔥', color: '#000000' }
    ],
    tools: [
      { name: 'Git', level: 82, icon: '📚', color: '#F05032' },
      { name: 'VS Code', level: 90, icon: '💻', color: '#007ACC' },
      { name: 'Figma', level: 75, icon: '🎯', color: '#F24E1E' }
    ]
  };

  return (
    <section id="skills" className="skills">
      {/* Animated Background */}
      <div className="skills-background">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>

      <div className="container">
        <div className="skills-content">
          
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-word">Technical</span>
              <span className="title-word accent">Skills</span>
            </h2>
            <div className="section-divider">
              <div className="divider-dot"></div>
              <div className="divider-line"></div>
              <div className="divider-dot"></div>
            </div>
            <p className="section-subtitle">
              Technologies I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="skills-grid">
            
            {/* Frontend Skills */}
            <div className="skill-category">
              <div className="category-header">
                <div className="category-icon">💻</div>
                <h3>Frontend Development</h3>
              </div>
              <div className="skills-list">
                {skillsData.frontend.map((skill, index) => (
                  <div key={skill.name} className="skill-item" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color
                        }}
                        data-level={skill.level}
                      >
                        <div className="progress-glow"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="skill-category">
              <div className="category-header">
                <div className="category-icon">⚙️</div>
                <h3>Backend Development</h3>
              </div>
              <div className="skills-list">
                {skillsData.backend.map((skill, index) => (
                  <div key={skill.name} className="skill-item" style={{animationDelay: `${index * 0.1 + 0.4}s`}}>
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color
                        }}
                        data-level={skill.level}
                      >
                        <div className="progress-glow"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Software */}
            <div className="skill-category">
              <div className="category-header">
                <div className="category-icon">🛠️</div>
                <h3>Tools & Software</h3>
              </div>
              <div className="skills-list">
                {skillsData.tools.map((skill, index) => (
                  <div key={skill.name} className="skill-item" style={{animationDelay: `${index * 0.1 + 0.8}s`}}>
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: skill.color
                        }}
                        data-level={skill.level}
                      >
                        <div className="progress-glow"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Additional Skills Tags */}
          <div className="skills-tags-section">
            <h3>Also Experienced With</h3>
            <div className="skills-tags">
              <div className="skill-tag">RESTful APIs</div>
              <div className="skill-tag">Responsive Design</div>
              <div className="skill-tag">GitHub</div>
              <div className="skill-tag">NPM</div>
              <div className="skill-tag">Chrome DevTools</div>
              <div className="skill-tag">Agile Methodology</div>
              <div className="skill-tag">Problem Solving</div>
              <div className="skill-tag">Team Collaboration</div>
            </div>
          </div>

          {/* Learning Journey */}
          <div className="learning-journey">
            <div className="journey-card">
              <h3>🚀 Currently Learning</h3>
              <div className="learning-items">
                <div className="learning-item">
                  <span className="learning-badge">New</span>
                  <span>Advanced React Patterns</span>
                </div>
                <div className="learning-item">
                  <span className="learning-badge">Exploring</span>
                  <span>Node.js & Express</span>
                </div>
                <div className="learning-item">
                  <span className="learning-badge">Next</span>
                  <span>TypeScript</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;