import React from 'react';
import './portfolio.css';

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      {/* Header Navigation linked to sections */}
      <header id="home">
        <a href="#home" className="logo">YG</a>
        <nav>
          <a href="#home">Home</a>
          <a href="#projects">My Projects</a>
          <a href="#about">About Me</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        <span className="badge">✨ Welcome to my digital workspace</span>
        <h1>Hello, I am Yonas Girma</h1>
        <p className="subtitle">
          I am a Website Developer, Graphics Designer and Social media manager.
        </p>

        <div className="cta-group">
          <a href="#projects" className="btn-primary">Explore My Works →</a>
          <a href="tel:+251953454037" className="btn-secondary">📞 Call Me</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
        </div>
      </main>

      {/* Stats Cards */}
      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">5+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">100%</div>
          <div className="stat-label">Responsive Design</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Branding & Design Portfolio</h3>
            <p>Branding, UI/UX, and creative visual artwork produced under the Dyonasiyos brand identity.</p>
            <a href="https://behance.net/yonasgirma8" target="_blank" rel="noreferrer" className="btn-primary" style={{padding: '8px 16px', fontSize: '0.875rem'}}>
              View on Behance ↗
            </a>
          </div>
          <div className="project-card">
            <h3>Web Applications & Interfaces</h3>
            <p>Flexible web layouts optimized for mobile, tablet, and desktop screens built with React and modern tech stacks.</p>
            <a href="#contact" className="btn-secondary" style={{padding: '8px 16px', fontSize: '0.875rem'}}>
              Request Demo
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-card">
          <p>
            I specialize in web development, user interface design, and graphic design branding for growing businesses. 
            My focus is on delivering flexible layouts, clean code, and engaging interactive experiences.
          </p>
        </div>
      </section>

      {/* Contact Section with Social Links */}
      <section id="contact" style={{margin: '40px 0 60px 0'}}>
        <h2 className="section-title">Contact & Socials</h2>
        
        <div className="socials-grid">
          <a href="tel:+251953454037" className="social-link">
            <span>📞</span>
            <div>
              <strong>Phone</strong>
              <p style={{fontSize: '0.85rem', color: '#94a3b8'}}>+251 953 454 037</p>
            </div>
          </a>

          <a href="mailto:yoniunica537@gmail.com" className="social-link">
            <span>✉️</span>
            <div>
              <strong>Email</strong>
              <p style={{fontSize: '0.85rem', color: '#94a3b8'}}>yoniunica537@gmail.com</p>
            </div>
          </a>

          <a href="https://behance.net/yonasgirma8" target="_blank" rel="noreferrer" className="social-link">
            <span>🎨</span>
            <div>
              <strong>Behance</strong>
              <p style={{fontSize: '0.85rem', color: '#94a3b8'}}>behance.net/yonasgirma8</p>
            </div>
          </a>

          <a href="https://instagram.com/dyonasiyos" target="_blank" rel="noreferrer" className="social-link">
            <span>📷</span>
            <div>
              <strong>Instagram</strong>
              <p style={{fontSize: '0.85rem', color: '#94a3b8'}}>@dyonasiyos</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}