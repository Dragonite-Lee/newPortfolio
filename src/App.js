import './App.css';
// tailwindCss 적용
import { useRef, useEffect } from 'react';
import "./index.css";
import Header from './header';
import WhoAmI from './whoAmi';
import Skills from './skills';

function App() {

  const snowRef = useRef();

  useEffect(()=>{
    // *눈을 만들어주는 함수
    function createSnow() {
      const el = document.createElement('div');
      el.classList.add(`w-[7px]`);
      el.classList.add(`h-[7px]`)
      el.classList.add('bg-black')
      el.classList.add('opacity-100')
      el.classList.add('rounded-[50%]')
      el.classList.add('relative')
      el.classList.add('blur-[1px]')
      // el.classList.add(`animate-[snow_linear_infinite]`)
      // el.style.marginLeft = randomPosition() + 'px'
      // el.style.animationDuration = `${Math.random() * (20 - 8) + 8}s`
      snowRef.current.appendChild(el);
    };
    // *눈 생성 함수
    for(let i = 0; i < 500; i++) {
      createSnow()  
      // console.log(1)
    }
  },[])
  
  
  function randomPosition() {
    return Math.floor(Math.random() * window.innerWidth)
  }
  return (
    <div className="App" ref={snowRef}>
      <Header />
      <WhoAmI />
      <Skills />
    </div>
  );
}

export default App;
