import './App.css';
// tailwindCss 적용
import "./index.css";
import Header from './header';
import WhoAmI from './whoAmi';
import Skills from './skills';

function App() {
  return (
    <div className="App">
      <Header />
      <WhoAmI />
      <Skills />
    </div>
  );
}

export default App;
