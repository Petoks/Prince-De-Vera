import './App.css';
import Contacts from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Navbar from './sections/Navbar/Navbar';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';


function App() {
  

  return (
    <>  
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <Contacts/>
      <Footer/>
      
      
    </>
  );
}

export default App;