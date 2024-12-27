import React from 'react';
import { Code2, Server, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Code2 className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-gray-600">Experienced in React, Ant Design, and modern CSS frameworks</p>
          </div>
          <div className="text-center p-6">
            <Server className="h-12 w-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-gray-600">Proficient in ASP.NET Core Web API and clean architecture</p>
          </div>
          <div className="text-center p-6">
            <Cpu className="h-12 w-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">IoT Development</h3>
            <p className="text-gray-600">Skilled in sensor integration and IoT system development</p>
          </div>
        </div>
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            I am a skilled software developer with experience in frontend technologies like React (TSX), Ant Design, and Tailwind CSS, and backend expertise in ASP.NET Core Web API (.NET 8). My work focuses on clean architecture, SOLID principles, and creating impactful IoT solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;