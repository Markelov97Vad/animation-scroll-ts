import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

import './App.css';

import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function App() {

  const rootRef = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
      ScrollSmoother.create({
        wrapper: rootRef.current,
        content: content.current,
        smooth: 2.3,
        smoothTouch: 2,
        effects: true
      })
  }, [])

  
  return (
    <div className="root" ref={rootRef}>
      <div className='content' ref={content}>
        <Header/>
        <main className='main root__main'>
          <Portfolio/>
        </main>
      </div>
    </div>
  );
}

export default App;
