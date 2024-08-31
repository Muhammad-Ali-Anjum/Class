import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* First Container */}
        <div>
          <h3 className="text-xl font-bold mb-2">M Ali Anjum</h3>
          <p>MERN Stack Developer</p>
        </div>

        {/* Second Container */}
        <div>
          <h3 className="text-lg font-bold mb-2">Get in touch</h3>
          <p>Email me:</p>
          <a href="mailto:anjumbalgharii@gmail.com" className="block text-white underline">anjumbalgharii@gmail.com</a>
          <p>Call me:</p>
          <a href="tel:+92123412" className="block text-white underline">(+92) 123412</a>
        </div>

        {/* Third Container */}
        <div>
          <nav>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white underline">Home</Link></li>
              <li><Link to="/projects" className="text-white underline">Portfolio</Link></li>
              <li><Link to="/blog" className="text-white underline">Blog</Link></li>
              <li><Link to="/contact" className="text-white underline">Contact</Link></li>
            </ul>
          </nav>
        </div>

      </div>

      <div className="text-center mt-8">
        <p>&copy; 2024 M Ali Anjum. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
