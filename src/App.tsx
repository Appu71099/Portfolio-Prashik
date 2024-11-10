import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-6 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com" className="hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" className="hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:your@email.com" className="hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;