import React from 'react';
import './portfolio.css'; // Direct CSS import for Vite/Acode server

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <header>
        <div className="logo">YG</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#projects">My Projects</a>
          <a href="#about">About Me</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="hero-section">
        <span className="badge">✨ Welcome to my digital workspace</span>
        <h1>Hello, I am Yonas Girma</h1>
        <p className="subtitle">
          I am a Website Developer, Graphics Designer and Social media manager.
        </p>

        <div className="cta-group">
          <a href="#projects" className="btn-primary">Explore My Works →</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
        </div>
      </main>

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
    </div>
  );
}