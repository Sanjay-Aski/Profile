import React, { useState } from 'react'; 
import SkillCard from './SkillCard';
import Skill_details_card from './Skill_details_card';

const skillsData = [
  {
    id: 1,
    skillName: "JavaScript",
    imageSrc: "Public/Images/skills/Javascript.png",
    description: "Proficient in modern JavaScript (ES6+) for front-end and back-end development.",
    learningSource: `Learned from the Youtube channel Named \"Apna College\".`,
    reasonForLearning: "As the language of the web, JavaScript was essential to learn for creating interactive and dynamic web applications.",
    usedIn: "All my web projects",
    additionalInfo: "Familiar with modern ES6+ features, async/await, promises, and functional programming patterns."
  },
  {
    id: 2,
    skillName: "React",
    imageSrc: "Public/Images/skills/React.png", 
    description: "Building dynamic and responsive user interfaces with React and its ecosystem.",
    learningSource: "Official React documentation, YouTube tutorials, and hands-on projects.",
    reasonForLearning: "To create modern, component-based UIs with efficient state management.",
    usedIn: "Portfolio website and interactive web applications.",
    additionalInfo: "Comfortable with React hooks, context API, and integration with backend APIs."
  },
  {
    id: 3,
    skillName: "Node.js",
    imageSrc: "Public/Images/skills/Node.png", 
    description: "Developing scalable server-side applications and APIs with Node.js and Express.",
    learningSource: " Node.js documentation, and YouTube tutorials.",
    reasonForLearning: "To build efficient backend services using JavaScript and unify my tech stack.",
    usedIn: "RESTful APIs, real-time applications.",
    additionalInfo: "Experienced with Express.js, MongoDB integration, and RESTful API design patterns."
  },
  {
    id: 4,
    skillName: "HTML5 & CSS3",
    imageSrc: "Public/Images/skills/HtmlCss.png", 
    description: "Crafting semantic HTML and modern CSS for well-structured and styled web pages.",
    learningSource: "Online tutorials (W3Schools, MDN), and building projects.",
    reasonForLearning: "Essential for creating the structure and styling of web pages.",
    usedIn: "Every front-end project and layout design.",
    additionalInfo: "Proficient in Flexbox, Grid, responsive design, and basic animations."
  },
  {
    id: 5,
    skillName: "Django FrameWork",
    imageSrc: "Public/Images/skills/Django.png",
    description: "Building secure and scalable web applications using the Django web framework with Python.",
    learningSource: "YouTube tutorials (CodeWithHarry, Corey Schafer) and official Django documentation.",
    reasonForLearning: "Learned for the Winter Intership and benefit from Django’s built-in features.",
    usedIn: "Web applications with complex backend logic.",
    additionalInfo: "Experienced with Django ORM, templates, forms, and authentication systems."
  },
  {
    id: 6,
    skillName: "Git & GitHub",
    imageSrc: "Public/Images/skills/Github.png",
    description: "Version control and collaborative development using Git and GitHub for code management and teamwork.",
    learningSource: "YouTube tutorials, and hands-on experience.",
    reasonForLearning: "To manage code changes effectively and collaborate with others.",
    usedIn: "All coding projects and team collaborations.",
    additionalInfo: "Familiar with branching, pull requests, merging, and resolving conflicts."
  },
  {
    id: 7,
    skillName: "Python",
    imageSrc: "Public/Images/skills/Python.png",
    description: "General-purpose programming language used for web development, scripting, and automation.",
    learningSource: "Apna College, Python documentation, and practice on coding platforms.",
    reasonForLearning: "Versatile and beginner-friendly language used across many domains.",
    usedIn: "Scripting, automation, Django web development, and problem solving.",
    additionalInfo: "Good understanding of OOP, file handling, exception handling."
  },
  {
    id: 8,
    skillName: "MySql",
    imageSrc: "Public/Images/skills/mysql.png",
    description: "Managing relational databases using MySQL for efficient data storage, retrieval, and manipulation.",
    learningSource: "YouTube (Telusko, Apna College), MySQL documentation.",
    reasonForLearning: "To manage structured data and integrate with backend services.",
    usedIn: "Database-driven applications and Django backend.",
    additionalInfo: "Experienced in writing queries, joins, and designing normalized schemas."
  },
  {
    id: 9,
    skillName: "Java",
    imageSrc: "Public/Images/skills/java.png",
    description: "Object-oriented programming language commonly used for backend systems and Data Structures & Algorithms (DSA).",
    learningSource: "Apna College and practice on platforms like LeetCode and GFG.",
    reasonForLearning: "Strongly typed language ideal for learning OOP and DSA.",
    usedIn: "To create the UI Based Application Using MVC Architecture",
    additionalInfo: "Comfortable with OOP principles, exception handling, collections framework, and recursion."
  },
  {
    id: 10,
    skillName: "Problem Solving",
    imageSrc: "Public/Images/skills/Graphs.png",
    description: "Developing efficient solutions using algorithms and data structures to tackle coding problems and challenges.",
    learningSource: "LeetCode and CodeForces.",
    reasonForLearning: "To improve logical thinking and prepare for technical interviews.",
    usedIn: "DSA contests , interview preparation, and logic-based projects.",
    additionalInfo: "Skilled in arrays, strings, linked lists, trees, graphs, dynamic programming, and recursion."
  }
];


function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="skills" className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-500">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {skillsData.map(skill => (
            <SkillCard
              key={skill.id}
              skill={skill}
              onClick={handleSkillClick}
            />
          ))}
        </div>
        
        <Skill_details_card 
          skillData={selectedSkill}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
} 

export default Skills;