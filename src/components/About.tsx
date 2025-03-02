import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "Angular",
    "React",
    "Spring Boot",
    "Java",
    "Docker",
    "Nginx",
    "Git/GitHub",
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left-to-Right Animated Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 mb-6">
              Hello! I'm a passionate software developer with a keen interest in
              building digital solutions that make a difference. With several
              years of experience in full-stack development, I enjoy tackling
              complex problems and turning them into simple and beautiful
              interface designs.
            </p>
            <p className="text-gray-300 mb-6">
              I focus on writing clean, elegant, and efficient code while
              ensuring the best user experience. When I'm not coding, you can
              find me exploring new technologies or contributing to open-source
              projects.
            </p>
          </motion.div>

          {/* Right-to-Left Animated Skills Section */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
