// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('hero-bg.jpg')" }}>
      <div className="text-center text-white p-8">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm [Your Name]</h1>
        <p className="text-xl mb-8">A Full Stack Web Developer</p>
        <a href="#contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-400">Contact Me</a>
      </div>
    </section>
  );
};

export default Hero;
