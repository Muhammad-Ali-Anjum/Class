// src/components/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {/* Example Skill */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Skill 1</h3>
              <p className="text-gray-700">Description of the skill or technology.</p>
            </div>
          </div>
          {/* Add more skills as needed */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
