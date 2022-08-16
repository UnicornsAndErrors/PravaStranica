/* navbar smo pozvali unutar headera, pa onda header u app.jsx! */

import React from 'react'
import Header from "./components/Header"
import Feature from "./components/Feature"
import About from "./components/About"
import Presentation from './components/Presentation'
import Contacts from "./components/Contacts"
import aboutimage from "./images/about.png"
import aboutimage1 from "./images/download.png"
import "./App.css"


const App = () => {
  return (
    <div>
      <Header />
      <Feature />
      <About image={aboutimage} title="Lorem Ipsum dolor" button="Download" />
      <Presentation />
      <About image={aboutimage1} title="Lorem" button="Skini" />
      <Contacts />
    </div>
  );
};

export default App;
