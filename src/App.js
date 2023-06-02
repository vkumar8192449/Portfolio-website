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
import { useState, useEffect } from 'react';

function App() {
  const [links, setlinks] = useState([1, 0, 0, 0, 0, 0]);
  const [menuopen, setmenu] = useState(false);

  useEffect(() => {
    if (menuopen === true) {
      document.getElementById("newbuttonslinks").style.display = "flex";
    } else {
      document.getElementById("newbuttonslinks").style.display = "none";
    }
  }, [menuopen]);

  return (
    <>
      <Header links={links} setlinks={setlinks} setmenu={setmenu} menuopen={menuopen} />
      <SocialLeft links={links} />
      <SocialRight links={links} />
      {(links[0] ? <Home /> : <></>)}
      {(links[1] ? <About /> : <></>)}
      {(links[2] ? <Skills /> : <></>)}
      {(links[3] ? <Coding /> : <></>)}
      {(links[4] ? <Work /> : <></>)}
      {(links[5] ? <Contact /> : <></>)}
    </>
  );
}

export default App;
