import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to My Portfolio</h1>
            <p className="text-lg text-gray-700 mb-8">
                Hi, I'm a Full Stack Web Developer with expertise in modern web technologies.
            </p>
            <a 
                href="/about" 
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400 transition">
                Learn More About Me
            </a>
        </div>
    );
};

export default Home;
