import React from 'react';

export default function About() {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'SQL',
    'AWS',
    'Docker'
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 mb-6">
              Hello! I'm a passionate software developer with a keen interest in building digital
              solutions that make a difference. With several years of experience in full-stack
              development, I enjoy tackling complex problems and turning them into simple and
              beautiful interface designs.
            </p>
            <p className="text-gray-300 mb-6">
              I focus on writing clean, elegant and efficient code while ensuring the best user
              experience. When I'm not coding, you can find me exploring new technologies or
              contributing to open-source projects.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}