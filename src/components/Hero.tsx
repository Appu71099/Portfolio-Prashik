import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          I'm Prashik
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Full Stack Developer specializing in building exceptional digital experiences
        </p>

    <div className="container mx-auto px-6 flex items-center justify-between my-8">
    <img src="" alt="Java" />
        <img src="" alt="Springboot" />
        <img src="" alt="Angular" />
        <img src="" alt="React" />
        <img src="" alt="Docker" />
        <img src="" alt="Nginx" />
        <img src="" alt="Git/Github" />
    </div>

    
        
       
        <a
          href="#projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-1"
        >
          View My Work
        </a>
      </div>


      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-white/80" />
      </a>
    </section>
  );
}