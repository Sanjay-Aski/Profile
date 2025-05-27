import React from 'react';

const projectData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce website with product listings, cart functionality, and user authentication. Built with MERN stack.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase skills and projects. Designed for responsiveness and a clean UI.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A simple and intuitive task management application to help users organize their daily tasks.",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    liveLink: "#",
    repoLink: "#"
  }
];

function Projects() {
  return (
    <section id="projects" className="py-16 px-4 md:px-8 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-500">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div key={project.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-600 dark:text-amber-400 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 h-20 overflow-y-auto">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-amber-200 dark:bg-amber-700 text-amber-800 dark:text-amber-100 text-xs px-2 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between">
                  {project.liveLink && project.liveLink !== "#" && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-700 dark:hover:text-amber-300 font-medium">View Live</a>
                  )}
                  {project.repoLink && project.repoLink !== "#" && (
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 font-medium">View Code</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
