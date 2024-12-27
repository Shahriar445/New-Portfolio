import React from "react";
import SkillBar from "./SkillBar";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React JS", level: 70 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Ant Design", level: 80 },
        { name: "Material UI", level: 75 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "ASP.NET Core", level: 75 },
        { name: "Clean Architecture", level: 60 },
        { name: "SOLID Principles", level: 75 },
      ],
    },
    {
      title: "Programming",
      skills: [
        { name: "C#", level: 90 },
        { name: "JavaScript/TypeScript", level: 80 },
        { name: "C++", level: 90 },
        { name: "Java", level: 80 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
