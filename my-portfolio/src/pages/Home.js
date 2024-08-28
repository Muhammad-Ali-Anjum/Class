import React from 'react';
import { Link } from 'react-router-dom'; 


const Home = () => {
    const services = [
        { name: 'Web Development', image: '' },
        { name: 'Custom Plugins or Themes', image: 'https://example.com/images/custom-plugins-themes.png' },
        { name: 'Responsive Design', image: 'https://example.com/images/responsive-design.png' },
        { name: 'SEO Optimization', image: 'https://example.com/images/seo-optimization.png' },
        { name: 'Website Maintenance', image: 'https://example.com/images/website-maintenance.png' },
        { name: 'Performance Optimization', image: 'https://example.com/images/performance-optimization.png' },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            {/* About Me Section */}
            <div className="mb-12">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* About Me Text Container */}
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Me</h1>
                        <p className="text-lg text-gray-700">
                            I am a skilled WordPress developer and proficient in MERN (MongoDB, Express.js, React.js, Node.js) stack technologies. With expertise in crafting customized solutions, I cater to diverse client needs. From intuitive user interfaces to dynamic applications, I combine creativity with technical excellence to deliver tailored solutions that elevate online presence and user experience.
                        </p>
                    </div>
                    {/* Image Container */}
                    <div className="md:w-1/2">
                        <img 
                            src="https://example.com/images/about-me.jpg" 
                            alt="About Me" 
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>

            {/* Things I Do Section */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">THINGS I DO</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link 
                            key={index} 
                            to="/contact" 
                            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:opacity-80"
                        >
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-[100%] h-[30vh] object-cover mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>

           
        </div>
    );
};

export default Home;
