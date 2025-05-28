import { useState, useEffect } from "react";

function Profile() {
  const fullName = "SANJAY ASKI";
  const [name, setName] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 200;
    const delayAfterTyping = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (index < fullName.length) {
          setName(fullName.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delayAfterTyping);
        }
      } else {
        if (index > 0) {
          setName(fullName.slice(0, index - 1));
          setIndex(index - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullName]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 max-w-5xl w-full">
        {/* Profile Image */}
        <img
          src="Images/Profile_Pic.jpg"
          alt="Profile Photo"
          className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-amber-500 shadow-xl"
        />

        {/* Text Content */}
        <div className="text-center sm:text-left">
          <div className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white min-h-[60px]">
            {name || " "}
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2">
            Problem Solver | Tech Enthusiast
          </p>

          {/* About Section */}
          <div className="mt-6 max-w-xl text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p>
              An Energetic , diligent , Hard-Working , Innovative Adaptable and eager to learn new technologies and
 adapt It with some initial Efforts. I had gained the command on Data structure and Software
 developing Skills . During College I started Preparing on my Skill. Adaptibility and Open-minded for
 problem solving , which help me to make interesting coding journey……. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
