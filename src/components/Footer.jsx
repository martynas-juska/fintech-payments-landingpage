import React, { useEffect, useRef } from "react";
import { footerLinks, socialMedia } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".footer-content > *", {
        opacity: 0,
        y: 40,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: comp.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer" ref={comp}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h2 className="navbar-logo-text">AltPayments</h2>
            <p>A new way to make payments easy, reliable and secure.</p>
            <div style={{ marginTop: '1.5rem' }}>
              <Button />
            </div>
          </div>
          <div className="footer-links-container">
            {footerLinks.map((linkGroup) => (
              <div key={linkGroup.title} className="footer-links-group">
                <h4>{linkGroup.title}</h4>
                <ul>
                  {linkGroup.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright 2025 Martynas Juska. All Rights Reserved.</p>
          <div className="social-media">
            {socialMedia.map((social) => (
              <img key={social.id} src={social.icon} alt={social.id} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;