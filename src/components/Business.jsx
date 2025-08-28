import React, { useEffect, useRef } from "react";
import { features } from "../constants";
import Button from "./Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger); 

// This is the component that was missing its code
const FeatureCard = ({ icon, title, content }) => (
  <div className="feature-card">
    <div className="feature-icon-container flex-center">
      <img src={icon} alt="icon" className="feature-icon" />
    </div>
    <div className="feature-content">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  </div>
);

const Business = () => {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("#business-content > *", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: comp.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      
      gsap.from(".feature-card", {
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".business-features",
          start: "top 80%",
          toggleActions: "play none none none",
        }
      })
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" className="business-section" ref={comp}>
      <div id="business-content" className="business-content">
        <h2 className="business-heading">
          You do the business, <br /> we’ll handle the money.
        </h2>
        <p className="business-description">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards, and saving money. We provide guidance to help you succeed.
        </p>
        <Button />
      </div>

      <div className="business-features">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Business;