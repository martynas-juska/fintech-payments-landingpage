import React, { useEffect, useRef } from "react";
import { card } from "../assets";
import Button from "./Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardDeal = () => {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate the text content
      gsap.from(".card-deal-content > *", {
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: comp.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animate the image
      gsap.from(".card-deal-image", {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
          trigger: comp.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section id="product" className="card-deal-section" ref={comp}>
      <div className="card-deal-content">
        <h2 className="business-heading">
          Find a better card deal <br /> in a few easy steps.
        </h2>
        <p className="business-description">
          Explore our curated list of credit cards and get the best deals available for your business or personal needs.
        </p>
        <Button />
      </div>
      <div className="card-deal-image">
        <img src={card} alt="card" />
      </div>
    </section>
  );
};

export default CardDeal;