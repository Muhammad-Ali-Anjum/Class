// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <form action="#" method="POST" className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
            <textarea id="message" name="message" className="w-full p-3 border border-gray-300 rounded-lg" rows="4" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
