

import React, { useEffect, useRef } from 'react';

function Skill_details_card({ skillData, isOpen, onClose }) {
    const modalRef = useRef(null);

    // Handle click outside to close the modal
    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    // Close on escape key
    useEffect(() => {
        function handleEscKey(event) {
            if (event.key === 'Escape') {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscKey);
        }
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
                <div 
                    ref={modalRef}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                >
                    <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 p-6">
                        <div className="flex items-center">
                            {skillData?.imageSrc && (
                                <img src={skillData.imageSrc} alt={skillData?.skillName} className="w-12 h-12 object-contain mr-4" />
                            )}
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{skillData?.skillName}</h3>
                        </div>
                        <button 
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    <div className="p-6">
                        <div className="mb-6">
                            <h4 className="font-semibold text-lg mb-2 text-gray-700 dark:text-gray-300">Overview</h4>
                            <p className="text-gray-600 dark:text-gray-400">{skillData?.description}</p>
                        </div>
                        
                        {skillData?.learningSource && (
                            <div className="mb-6">
                                <h4 className="font-semibold text-lg mb-2 text-gray-700 dark:text-gray-300">Learning Sources</h4>
                                <p className="text-gray-600 dark:text-gray-400">{skillData?.learningSource}</p>
                            </div>
                        )}
                        
                        {skillData?.reasonForLearning && (
                            <div className="mb-6">
                                <h4 className="font-semibold text-lg mb-2 text-gray-700 dark:text-gray-300">Why I Learned It</h4>
                                <p className="text-gray-600 dark:text-gray-400">{skillData?.reasonForLearning}</p>
                            </div>
                        )}
                        
                        {skillData?.usedIn && (
                            <div className="mb-6">
                                <h4 className="font-semibold text-lg mb-2 text-gray-700 dark:text-gray-300">Used In</h4>
                                <p className="text-gray-600 dark:text-gray-400">{skillData?.usedIn}</p>
                            </div>
                        )}


                        {skillData?.additionalInfo && (
                            <div>
                                <h4 className="font-semibold text-lg mb-2 text-gray-700 dark:text-gray-300">Additional Information</h4>
                                <p className="text-gray-600 dark:text-gray-400">{skillData?.additionalInfo}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skill_details_card;