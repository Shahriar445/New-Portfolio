import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import TypewriterText from "./TypewriterText";
import SocialLink from "./hero/SocialLink";

const Hero = () => {
  const roles = [
    "Assistant Software Engineer",
    "Full Stack Developer",
    "React Specialist",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 pt-16"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Shahriar Haque</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            <TypewriterText texts={roles} />
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12 animate-slide-up">
            Hi, I'm Shahriar Haque, Assistant Software Engineer at Ha-Meem
            Group. I specialize in ASP.NET Core Web API, React JS, SQL and IoT
            systems, with a passion for innovative software development.
          </p>
          <div className="flex justify-center space-x-6">
            <SocialLink
              href="https://github.com"
              icon={Github}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com"
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="mailto:shahriarhaque445@gmail.com"
              icon={Mail}
              label="Email"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
