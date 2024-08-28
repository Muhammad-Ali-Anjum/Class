// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {/* Example Project */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Project 1</h3>
              <p className="text-gray-700 mb-4">A brief description of the project goes here.</p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
