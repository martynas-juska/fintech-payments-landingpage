import React, { useEffect, useRef } from "react";
import { feedback } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// This is the sub-component that was missing its code
const FeedbackCard = ({ content, name, title, img }) => (
  <div className="feedback-card">
    <p>"{content}"</p>
    <div className="feedback-author">
      <img src={img} alt={name} />
      <div className="feedback-author-info">
        <h4>{name}</h4>
        <p>{title}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate the heading and paragraph
      gsap.from(".testimonials-heading > *", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: comp.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animate the feedback cards
      gsap.from(".feedback-card", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".feedback-container",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section id="clients" ref={comp}>
      <div className="testimonials-heading">
        <h2>What people are saying about us</h2>
        <p>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="feedback-container">
        {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
      </div>
    </section>
  );
};

export default Testimonials;