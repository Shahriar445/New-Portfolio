import React from "react";
import { Award, Trophy, Code, Star, Target, BookOpen } from "lucide-react";
import AchievementCard from "./achievements/AchievementCard";

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: "Research Paper Publication",
      description:
        '"IoT-Based Smart Healthcare Monitoring" accepted at ICCT 2024',
      date: "March 2024",
      category: "Research",
    },
    {
      icon: Trophy,
      title: "Competitive Programming",
      description: "Achieved 3-star rating on HackerRank (Problem Solving)",
      date: "February 2024",
      category: "Coding",
    },
    {
      icon: Star,
      title: "Problem Solving Progress",
      description: "Solved 300+ problems on different online judges",
      date: "Ongoing",
      category: "Problem Solving",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 gradient-text">
          Achievements
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Highlighting my journey through competitive programming, research, and
          academic excellence
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
