import React, { useEffect, useRef } from "react";
import { stats } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const comp = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate each stat item one by one
      gsap.from(".stat-item", {
        opacity: 0,
        y: 40,
        stagger: 0.3, // Adds a 0.3s delay between each item
        duration: 1,
        scrollTrigger: {
          trigger: comp.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section className="stats-section" ref={comp}>
      {stats.map((stat) => (
        <div key={stat.id} className="stat-item">
          <h4>{stat.value}</h4>
          <p>{stat.title}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;