// Contact.js
import React from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      platform: "Email",
      value: "mbanicheryl45@gmail.com",
      link: "mailto:mbanicheryl45@gmail.com",
      icon: "✉️"
    },
    {
      platform: "GitHub",
      value: "github.com/cherylmbani",
      link: "https://github.com/cherylmbani",
      icon: "💻"
    },
    {
      platform: "LinkedIn",
      value: "linkedin.com/in/cheryl-mbani",
      link: "https://www.linkedin.com/in/cheryl-mbani-533484334/",
      icon: "💼"
    },
    {
      platform: "Portfolio",
      value: "cherylmbani.dev",
      link: "#",
      icon: "🌐"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">
          I'm always open to discussing new opportunities, creative projects, 
          or potential collaborations. Feel free to reach out!
        </p>
        
        <div className="contact-methods">
          {contactInfo.map((contact, index) => (
            <a 
              key={index}
              href={contact.link}
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">{contact.icon}</div>
              <div className="contact-details">
                <h3>{contact.platform}</h3>
                <p>{contact.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="contact-form-container">
          <h3>Send Me a Message</h3>
          <form className="contact-form">
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Your Name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Your Email"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <textarea 
                placeholder="Your Message"
                className="form-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;