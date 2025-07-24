import React from 'react';

const educationDetails = [
  {
    id: 1,
    institution: "Vivekanand Education Society's Institute of Technology, Mumbai",
    degree: "B.Tech in Computer Engineering",
    duration: "2023 – 2027",
    grade: "CGPA: 9.6",
    icon: "🎓",
  },
  {
    id: 2,
    institution: "Smt. Chandibai Himathmal Mansukhani College, Ulhasnagar",
    degree: "HSC – Science Stream",
    duration: "2021 – 2023",
    grade: "Percentage: 76.33%",
    icon: "🏫",
  },
  {
    id: 3,
    institution: "R.G.S. English High School, Ulhasnagar",
    degree: "SSC",
    duration: "2011 – 2021",
    grade: "Percentage: 90.40%",
    icon: "🏢",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-500">
          EDUCATION
        </h2>
        <div className="relative space-y-16 z-10">
          {educationDetails.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative flex flex-col md:flex-row ${
                index % 2 !== 0 ? 'md:flex-row-reverse lg:left-[20%]' : 'lg:-left-[20%]'
              } items-start gap-6`}
            >
              <div className="hidden md:flex w-16 h-16 rounded-full bg-amber-400 items-center justify-center text-white text-2xl font-bold shadow-md z-10">
                {index + 1}
              </div>

              <div className="relative w-full md:w-8/12 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 border-t-4 md:border-t-0 md:border-l-4 border-amber-500">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center text-xl shadow-md">
                  {edu.icon}
                </div>

                <h3 className="text-xl font-semibold text-amber-600 dark:text-amber-400 mb-2">
                  {edu.institution}
                </h3>
                <p className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {edu.degree}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-block bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 text-sm px-3 py-1 rounded-full">
                    {edu.duration}
                  </span>
                  <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm px-3 py-1 rounded-full">
                    {edu.grade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
