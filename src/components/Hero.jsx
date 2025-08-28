import React, { useEffect, useRef } from "react";
import { robot } from "../assets";
import Button from "./Button";
import { gsap } from "gsap"; // 1. Import GSAP

const Hero = () => {
  // 2. Set up refs for the elements we want to animate
  const comp = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // 3. Create a GSAP context for cleanup
    let ctx = gsap.context(() => {
      // Create a timeline
      const t1 = gsap.timeline();
      
      // Animate the heading, description, and button
      t1.from("#intro-text", {
        xPercent: "-20",
        opacity: 0,
        stagger: 0.3, // Animates elements with this class one after the other
        duration: 2,// Original 1
        ease: "power4.out" // Originally expo.out
      })
      // Animate the image separately
      .from(imageRef.current, {
        xPercent: "100",
        opacity: 0,
        stagger: 0.3, // Animates elements with this class one after the other
        duration: 2,// Original 1
        ease: "power4.out" // Originally expo.out
      }, "<"); // The "<" starts this animation at the same time as the previous one
    }, comp); // comp is the scope of this context

    // 4. Cleanup function
    return () => ctx.revert();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section id="home" className="hero-section" ref={comp}>
      <div className="hero-content">
        {/* Add an ID to each element for GSAP to target */}
        <h1 id="intro-text" className="hero-heading">
          The Next <br />
          <span className="text-gradient">Generation</span> Payment Method.
        </h1>
        <p id="intro-text" className="hero-description">
          Our team of experts uses a methodology to identify the credit cards most
          likely to fit your needs. We examine annual percentage rates, fees, and
          more.
        </p>
        <div id="intro-text">
            <Button />
        </div>
      </div>

      <div className="hero-image-container">
        <img src={robot} alt="billing" className="hero-image" ref={imageRef} />
      </div>
    </section>
  );
};

export default Hero;