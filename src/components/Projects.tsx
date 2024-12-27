import React from "react";
import {
  MonitorSmartphone,
  Database,
  UtensilsCrossed,
  Bus,
  Building2,
  Boxes,
  ExternalLink,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "IoT Data Display Application",
      description:
        "Real-time sensor data visualization platform integrating GY-906, MAX30102 sensors, GPS tracking, and ESP32-CAM streaming.",
      tech: "React (TSX), .NET API, WebSocket, Chart.js, Arduino",
      icon: MonitorSmartphone,
      link: "#",
    },
    {
      title: "Bus Management System",
      description:
        "Comprehensive fleet management solution with real-time tracking, scheduling, and passenger analytics.",
      tech: "Java FX, SQL Server, Scene Builder",
      icon: Bus,
      link: "#",
    },
    {
      title: "Customs Management System",
      description:
        "Digital customs declaration platform with automated documentation and compliance checking.",
      tech: "React, Redux, Tailwind Css, .NET API, MSSQL",
      icon: Building2,
      link: "#",
    },
    {
      title: "Dynamic Approval System",
      description:
        "Hierarchical budget approval workflow with dynamic routing and real-time notifications.",
      tech: ".NET, SQL Server, SignalR",
      icon: Database,
      link: "#",
    },
    {
      title: "Inventory Management System",
      description:
        "Real-time stock tracking with barcode scanning and automated reordering system.",
      tech: "React, .NET Core, SQL Server",
      icon: Boxes,
      link: "#",
    },
    {
      title: "Restaurant Management System",
      description:
        "Full-stack solution for restaurant operations including POS, inventory, and online ordering.",
      tech: "React, Ant Design, .NET API, SQL Server",
      icon: UtensilsCrossed,
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 gradient-text">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto animate-fade-in">
          Explore my latest work combining modern technologies with practical
          solutions
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900 p-6 hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform scale-150 group-hover:scale-100 transition-transform duration-500 ease-in-out" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <project.icon className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  <a
                    href={project.link}
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    aria-label="View project"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(", ").map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
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
};

export default Projects;
