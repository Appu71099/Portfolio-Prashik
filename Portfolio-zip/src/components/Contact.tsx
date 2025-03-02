import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-300 mb-8">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, feel free to reach out!
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <SocialLink href="mailto:your@email.com" icon={<Mail size={24} />} label="Email" />
            <SocialLink href="https://github.com" icon={<Github size={24} />} label="GitHub" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={24} />} label="LinkedIn" />
          </div>

          <a
            href="mailto:your@email.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}

const SocialLink = ({ 
  href, 
  icon, 
  label 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string;
}) => (
  <a
    href={href}
    className="flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
    <span className="text-sm">{label}</span>
  </a>
);