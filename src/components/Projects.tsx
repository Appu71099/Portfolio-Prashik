import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'News Application',
      description: 'The News Application is a responsive Angular-based platform that delivers real-time news from public APIs with features like category filtering and search. It ensures a seamless user experience with a modern design and device compatibility.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: ['Angular', 'Rapid Apis', 'Bootstraps'],
      github: 'https://github.com/Appu71099/angularNewsApp',
      live: 'https://appu71099.github.io/angularNewsApp/'
    },
    {
      title: 'Marketing Agency Website',
      description: 'A modern marketing agency website built with React and Bootstrap, featuring a responsive design, service showcase, and contact form. It highlights the agency\'s expertise in digital marketing solutions.',
      image: '/Images/Screenshot 2025-06-28 103106.png',
      technologies: ['React Js', 'Bootstrap', 'React Bootstrap'],
      github: 'https://github.com/Appu71099/Marketing-Agency.git',
      live: 'https://prashik-marketing-agency.netlify.app/'
    },

   
    // {
    //   title: 'Project Three',
    //   description: 'AI-powered data analytics dashboard',
    //   image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //   technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
    //   github: 'https://github.com',
    //   live: 'https://example.com'
    // }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.live}
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-sm bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}