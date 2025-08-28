import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Business from "./components/Business";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CardDeal from "./components/CardDeal";

const App = () => {
  return (
    <div>
      <div >
        <Navbar />
      </div>
      
      <div className="container">
        <Hero />
      </div>

      <div className="container">
        <Stats />
        <Business />
        <CardDeal />
        <Testimonials />
      </div>

      <Footer />
    </div>
  );
};

export default App;