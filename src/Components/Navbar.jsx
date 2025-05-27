function Navbar(){
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
        <div className="w-full flex z-50 justify-center sticky top-5 h-10 p-8 mb-8">
        <div className="flex w-auto max-w-2xl justify-evenly flex-row h-12 items-center rounded-lg bg-amber-500 px-6 shadow-lg">
            
            <topic onClick={() => scrollToSection('home')}>Home</topic>
            <topic onClick={() => scrollToSection('skills')} className="mx-3 md:mx-4">Skills</topic>
            <topic onClick={() => scrollToSection('experience')} className="mx-3 md:mx-4">Experience</topic>
            <topic onClick={() => scrollToSection('projects')} className="mx-3 md:mx-4">Projects</topic>
            <topic onClick={() => scrollToSection('contact')} className="mx-3 md:mx-4">Contact</topic>

        </div>
        </div>
        </>
    )
}

export default Navbar;