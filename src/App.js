import './App.css';
import Header from './Header';
import SocialLeft from './SocialLeft.jsx';
import SocialRight from './SocialRight.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Coding from './Coding.jsx';
import Work from './Work';
import Contact from './Contact';


function App() {
  return (
    <>
      <Header />
      <SocialLeft />
      <SocialRight />
      <Home />
      <About />
      <Skills />
      <Coding />
      <Work />
      <Contact />
    </>
  );
}

export default App;
