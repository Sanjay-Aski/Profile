import React from 'react';

function SkillCard({ skill, onClick }) {
  const { imageSrc, skillName, description } = skill;

  return (
    <div
      onClick={() => onClick(skill)}
      className={`skill-item cursor-pointer p-6 bg-white dark:bg-gray-700 border-2 border-amber-500 shadow-xl rounded-lg m-4 w-64 h-auto flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-105`}
    >
      {imageSrc && (
         <img src={imageSrc} alt={skillName} className="w-20 h-20 object-contain mb-4" />
      )}
      <h4 className="font-semibold text-xl mb-2 text-gray-800 dark:text-white">{skillName}</h4>
      {description && <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>}
    </div>
  );
}
 
export default SkillCard;