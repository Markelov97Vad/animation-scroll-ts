import { useEffect, useLayoutEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import { appendScript } from './components/utils/appendScript';
import useImportScript from './hooks/useImportScript';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


// import gsap from 'gsap';

// import gsap from 'gsap';
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { gsap } from "gsap";
// import ScrollTrigger from 'gsap/ScrollTrigger'
// import {gsap} from './components/gsap/gsap.min';
// import {ScrollSmoother} from './components/gsap/ScrollSmoother.min';
// import ScrollTrigger from'./components/gsap/ScrollTrigger.min'

// import { gsap, ScrollTrigger } from "gsap/all"
// /* eslint-disable */
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


// gsap.config({trialware: false});

function App() {

  const rootRef = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    ScrollSmoother.create({
      wrapper: rootRef.current,
      content: content.current,
      smooth: 1.5,
      smoothTouch: 0.4,
      effects: true
    })
  }, [])

  
  return (<>
      {/* <script src='./components/gsap/gsap.min.js'></script> */}
        
      {/* { gsap.registerPlugin(ScrollTrigger, ScrollSmoother)} */}
      {/* <Helmet>
        <script src="./gsap/gsap.min.js" type="text/javascript" />
        <script src="./gsap/ScrollSmoother.min.js" type="text/javascript" />
        <script src="./gsap/ScrollTrigger.min.js" type="text/javascript" />
      </Helmet> */}
      <div className="root" ref={rootRef}>
        <div className='content' ref={content}>
          <Header/>
          <main className='main root__main'>
            <Portfolio/>
          </main>
        </div>
      </div>
  </>
  );
}

export default App;
