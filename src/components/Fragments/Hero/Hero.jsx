import React from "react";
// ! Import Styling
import "./Hero.scss";

// ! Import Components
import Button from "../../Elements/Button/Button";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-container">
        <div className="hero-header">
          <h1 className="hero-header-title">
            Vite<span>.</span>Trip
          </h1>
          <h3 className="hero-header-subtitle">
            Perjalanan Anda Dimulai Dari Sini
          </h3>
          <Button
            to={"/booking"}
            classname={"hero-header-button"}
            variant={"primary"}
          >
            Booking Now
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
