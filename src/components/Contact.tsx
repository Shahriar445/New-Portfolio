import React from 'react';
import { Mail, MessageSquare, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import ContactItem from './contact/ContactItem';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Get in Touch</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Let's Connect</h3>
            <div className="space-y-4">
              <ContactItem 
                icon={Mail} 
                label="Email"
                value="shahriarhaque445@gmail.com"
                href="mailto:shahriarhaque445@gmail.com"
              />
              <ContactItem 
                icon={Github} 
                label="GitHub"
                value="github.com/shahriar"
                href="https://github.com"
              />
              <ContactItem 
                icon={Linkedin} 
                label="LinkedIn"
                value="linkedin.com/in/shahriar"
                href="https://linkedin.com"
              />
              <ContactItem 
                icon={MapPin} 
                label="Location"
                value="Dhaka, Bangladesh"
              />
              <ContactItem 
                icon={Phone} 
                label="Phone"
                value="+880 1234567890"
                href="tel:+8801234567890"
              />
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Quick Message</h3>
            </div>
            <div className="mb-6">
              <p className="text-gray-700 dark:text-gray-300 italic">
                "If you think you are too small to be effective, you have never been in the dark with a mosquito."
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400">
                Hi! Let me know if you have questions or want to collaborate on a project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;