import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-amber-500">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 p-8 md:p-12 rounded-xl shadow-2xl border border-amber-300 dark:border-amber-700">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I'm currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaEnvelope className="text-amber-500 text-2xl" />
              <a href="mailto:sanjay.aski6553@gmail.com" className="text-lg text-amber-600 dark:text-amber-400 hover:underline">
                sanjay.aski6553@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaPhone className="text-amber-500 text-2xl" />
              <a href="tel:+918766531982" className="text-lg text-amber-600 dark:text-amber-400 hover:underline">
                +91 8766531982
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <FaMapMarkerAlt className="text-amber-500 text-2xl" />
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Mumbai, Maharashtra, India
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors text-3xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors text-3xl">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
