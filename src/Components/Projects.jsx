import React from 'react';

const projectData = [
  {
  id: 1,
  title: "SchoolTrack - R.I Vidya Mandir",
  description: "SchoolTrack is a comprehensive educational management system designed for R.I. Vidya Mandir school to facilitate seamless communication between teachers and parents. The platform enables parents to track their children's academic progress, attendance, and school activities in real-time. Teachers can efficiently manage student records, share academic reports, create and distribute forms, record attendance, and communicate directly with parents.",
  technologies: ["React","Node.js","Express","MongoDB","Tailwind CSS","JWT Authentication","React Router","React Context API","Socket.IO","Mongoose ODM","React Icons"],
  liveLink: "https://github.com/Sanjay-Aski/Field-Project-SE",
  repoLink: "https://github.com/Sanjay-Aski/Field-Project-SE"
},
  {
  id: 2,
  title: "Weather Website",
  description: "A responsive weather application built with React and Redux that provides real-time weather data through WeatherAPI integration. Features include city search functionality, dynamic theme toggling between light and dark modes, persistent data storage, and comprehensive weather metrics including temperature, humidity, air quality, wind speed, and sunrise/sunset times. The application offers a clean, modern UI with intuitive navigation and responsive design for all device sizes.",
  technologies: ["React","Redux","Tailwind CSS","JavaScript","WeatherAPI","Local Storage","Responsive Design",],
    liveLink: "https://sanjay-aski.github.io/Weather-App/",
    repoLink: "https://github.com/Sanjay-Aski/Weather-App/"
  },
  {
    "id": 3,
    "title": "Tic Tac Toe",
    "description": "An interactive Tic-Tac-Toe game featuring both single-player mode with AI using the minimax algorithm and dual-player mode for playing with friends. Players can choose to play as 'X' (first move) or 'O' (second move) against the unbeatable AI opponent.",
    "technologies": ["HTML", "CSS", "JavaScript", "Minimax Algorithm"],
    "liveLink": "https://sanjay-aski.github.io/Tic-Tak-Toe/",
    "repoLink": "https://github.com/Sanjay-Aski/Tic-Tak-Toe"
},
{
    "id": 4,
  "title": "Railway Ticketing Management",
  "description": "A Java-based railway ticketing and pass management system that allows users to purchase regular tickets and monthly/quarterly passes. The application features ticket generation, searching by various parameters, editing ticket information, and printing tickets. Data is persisted using JSON files and the system provides a complete interface for managing passenger information and railway tickets.",
  "technologies": ["Java", "Swing", "AWT", "JSON", "Object-Oriented Programming"],
  "liveLink": "",
  "repoLink": "https://github.com/Sanjay-Aski/1st_year_Miniproject/tree/main/1st_Year-Miniproject"
},
{
  "id": 5,
  "title": "Login Page & User Authentication System",
  "description": "A PHP-based user authentication system that provides login functionality, user registration, and password recovery features. The application connects to a MySQL database to store and validate user credentials. It features a responsive design with animated UI elements and includes secure login validation, new user registration, and password recovery via OTP verification.",
  "technologies": ["PHP", "MySQL", "HTML/CSS", "JavaScript", "Apache"],
  "liveLink": "",
  "repoLink": "https://github.com/Sanjay-Aski/1st_year_Miniproject/tree/main/1st_Year-Miniproject"
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
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 h-auto overflow-y-auto">{project.description}</p>
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
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-700 dark:hover:text-amber-300 font-medium">View Live Link</a>
                  )}
                  {project.repoLink && project.repoLink !== "#" && (
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 font-medium">View Github Repository</a>
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
