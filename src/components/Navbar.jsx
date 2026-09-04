import { useState, useEffect } from 'react';
import { brand } from '../data/content';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="navbar-logo">
          <span className="navbar-brand">{brand.siteName}</span>
        </div>
        
        <div className="navbar-links">
          <a href="#story">Our Story</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#telegram">Telegram</a>
          <a href="#support">Support</a>
        </div>

        <div className="navbar-cta">
          <a className="student-login-btn" href={brand.lmsUrl}>
            Student Login
          </a>
        </div>
      </nav>
    </header>
  );
}
