import './App.css'
import Navbar from './Components/Navbar.jsx';
import Profile  from './Components/Profile.jsx';
import FloatingWidget from './Components/ChatBox.jsx';
import WorkExperience from './Components/WorkExperience.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import Skills from './Components/Skills.jsx';
function App(){
 
  return (
    <>
    <div className='dark:bg-gray-900' >
    <Navbar/>
    <Profile />
    <Skills/>
    <WorkExperience/>
    <Projects/>
    <Contact/>
    {/* <div className='m-10 h-screen' >Sanjay</div> */}
    <FloatingWidget />
    </div>
    </>
  )
}

export default App;