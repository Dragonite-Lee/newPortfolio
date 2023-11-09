import './App.css';
// tailwindCss 적용
import { useRef, useEffect } from 'react';
import "./index.css";
import Header from './header';
import WhoAmI from './whoAmi';
import Skills from './skills';
import Project from './projects';

function App() {
  
  return (
    <div className="App">
      <Header />
      <WhoAmI />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
