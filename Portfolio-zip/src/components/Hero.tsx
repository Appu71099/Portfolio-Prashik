import React from 'react';
import { ChevronDown } from 'lucide-react';
import  angular  from '../Assets/Angula.png';
import java from '../Assets/java.png'
import reactimg from '../Assets/React.svg';
import docker from '../Assets/docker.png'
import nginx from '../Assets/nginx.png'
import springboot from '../Assets/spring boot.png'
import github from '../Assets/icons8-git-240.png'


export default function Hero() {

  const technologies=[
    {
      "id":1,
      "logo":angular,
      "name":"Angular"
    },
    {
      "id":2,
      "logo":reactimg,
      "name":"React"
    },
    {
      "id":3,
      "logo":java,
      "name":"Java"
    },
    {
      "id":4,
      "logo":docker,
      "name":"Docker"
    },
    {
      "id":5,
      "logo":nginx,
      "name":"Nginx"
    },
    {
      "id":6,
      "logo":springboot,
      "name":"Springboot"
    },
    {
      "id":7,
      "logo":github,
      "name":"Git/GitHub"
    },
  ]
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
    {/* <img src={java} alt="Java" className="w-10 h-10 object-cover rounded-lg shadow-lg"/>
        <img src={springboot} alt="Springboot" className="w-10 h-10 object-cover rounded-lg shadow-lg"/>
        <img src={angular} alt="Angular"  className="w-10 h-10 object-cover rounded-lg shadow-lg"/>
        <img src={reactimg} alt="React" className="w-10 h-10 object-cover rounded-lg shadow-lg"/>
        <img src={docker} alt="Docker" className="w-10 h-10 object-cover rounded-lg shadow-lg"/>
        <img src={nginx} alt="Nginx" className="w-10 h-10 object-cover rounded-lg shadow-lg"/>
        <img src={github} alt="Git/Github" className="w-10 h-10 object-cover rounded-lg shadow-lg"/> */}


        {
          
          technologies.map((tech) => (
            <div>
            <img key={tech.id} src={tech.logo} alt={tech.name} className="w-10 h-10 object-cover rounded-lg shadow-lg"/>

            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2rem] px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        {tech.name}
      </span>
          </div>
          ))
 
        }
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