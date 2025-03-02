import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import angular from "../Assets/Angula.png";
import java from "../Assets/java.png";
import reactimg from "../Assets/React.svg";
import docker from "../Assets/docker.png";
import nginx from "../Assets/nginx.png";
import springboot from "../Assets/spring boot.png";
import github from "../Assets/icons8-git-240.png";

export default function Hero() {
  const technologies = [
    { id: 1, logo: angular, name: "Angular" },
    { id: 2, logo: reactimg, name: "React" },
    { id: 3, logo: java, name: "Java" },
    { id: 4, logo: docker, name: "Docker" },
    { id: 5, logo: nginx, name: "Nginx" },
    { id: 6, logo: springboot, name: "Spring Boot" },
    { id: 7, logo: github, name: "Git/GitHub" },
  ];

  return (
    <section className="h-screen flex items-center justify-center relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative text-center px-6">
        {/* Animated Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          HI, I am Prashik
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Full Stack Developer with 2+ years of experience in Angular, React,
          Spring Boot (Java), and DevOps tools. Specializing in scalable,
          high-performance applications, currently building banking and payment
          solutions.
        </motion.p>

        {/* Animated Technologies */}
        <motion.div
          className="container mx-auto px-6 flex items-center justify-center gap-8 my-8 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              className="relative group flex flex-col items-center"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.2 }}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-12 h-12 object-cover rounded-lg shadow-lg transition-transform"
              />
              <span className="absolute bottom-[-1.5rem] px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Button */}
        <motion.a
          href="#projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View My Work
        </motion.a>
      </div>

      {/* Bouncing Down Arrow */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown size={32} className="text-white/80" />
      </motion.a>
    </section>
  );
}
