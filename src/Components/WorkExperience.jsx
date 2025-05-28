import React from 'react';

const experiences = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Tech Solutions Inc.",
    duration: "June 2023 - Aug 2023",
    details: [
      "Developed and maintained web applications using React and Node.js.",
      "Collaborated with a team of 5 developers on various projects.",
      "Gained experience in Agile methodologies and version control (Git)."
    ],
    icon: "💼" // Example icon
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "Jan 2022 - May 2023",
    details: [
      "Designed and built responsive websites for small businesses.",
      "Managed client communication, project timelines, and deliverables.",
      "Utilized HTML, CSS, JavaScript, and WordPress."
    ],
    icon: "💻"
  }
];

function WorkExperience() {
  return (
    <section id="experience" className="py-16 px-4 md:px-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-500">Work Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-amber-400 -ml-0.5"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className={`mb-12 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2"></div>
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} relative`}>
                <div className="md:absolute left-1/2  transform md:-translate-x-1/2 md:-translate-y-1/2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg mb-4 md:mb-0">
                  {exp.icon}
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-amber-600 dark:text-amber-400 mb-1">{exp.role}</h3>
                  <p className="text-md font-medium text-gray-700 dark:text-gray-300 mb-1">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.duration}</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
