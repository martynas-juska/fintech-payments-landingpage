import React, { useState, useEffect, useRef } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show navbar at the very top
      if (currentScrollY <= 100) {
        setVisible(true);
      } else {
        // Only apply scroll logic after 100px from top
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down - show navbar
          setVisible(true);
        } else {
          // Scrolling up - hide navbar
          setVisible(false);
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${!visible ? 'navbar--hidden' : ''}`}>
      <div className="navbar-content">
        
        <div className="logo-container">
          <h2 className="navbar-logo-text">AltPayments</h2>
        </div>

        <ul className="navbar-links">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-container">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="mobile-menu-icon"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div className={`mobile-menu ${toggle ? "active" : ""}`}>
            <ul>
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a href={`#${nav.id}`} onClick={() => setToggle(false)}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;