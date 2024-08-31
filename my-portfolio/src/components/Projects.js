// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Tours Website */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <img src="/images/tours-website.jpg" alt="Tours Website" className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">Tours Website</h3>
            <p className="text-gray-700">
              TripAdvisor is the world's largest travel site, enabling travelers to plan and book the perfect trip.
            </p>
          </div>

          {/* E-commerce Website */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <img src="/images/e-commerce-website.jpg" alt="E-commerce Website" className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
            <p className="text-gray-700">
              Crafting dynamic e-commerce experiences is my passion. Discover a collection of meticulously designed online stores tailored to captivate audiences and drive sales.
            </p>
          </div>

          {/* Blog Website */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <img src="/images/blog-website.jpg" alt="Blog Website" className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">Blog Website</h3>
            <p className="text-gray-700">
              My expertise in crafting captivating blog websites. Explore how I bring visions to life and help clients establish their online presence.
            </p>
          </div>

          {/* Services Website */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <img src="/images/services-website.jpg" alt="Services Website" className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">Services Website</h3>
            <p className="text-gray-700">
              My expertise in crafting exceptional services websites. Explore my work and discover how I bring visions to life, one website at a time.
            </p>
          </div>

          {/* Hotel Management System */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <img src="/images/hotel-management-system.jpg" alt="Hotel Management System" className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">Hotel Management System</h3>
            <p className="text-gray-700">
              A comprehensive system designed to streamline hotel operations, from reservations to guest management and beyond.
            </p>
          </div>

          {/* School Management System */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <img src="/images/school-management-system.jpg" alt="School Management System" className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">School Management System</h3>
            <p className="text-gray-700">
              A robust solution for managing educational institutions, covering everything from student enrollment to grade tracking and attendance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
