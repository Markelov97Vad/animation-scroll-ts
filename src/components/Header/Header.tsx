import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Header.css'

import hero from '../../image/hero.png'
import Wrapper from '../Wrapper/Wrapper';

gsap.registerPlugin(ScrollTrigger, )

function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    gsap.fromTo(el, { opacity: 1 }, {
        opacity: 0, 
        scrollTrigger: {
        trigger: el,
        start: 'center',
        end: '1400',
        scrub: true
      }})
  })

  return ( 
    <header data-speed='.6' className='header' ref={headerRef}>
      <img className='header__image' src={hero} alt="preview"/>
      <div className='header__container'>
        <Wrapper>
          <div data-speed='1.2' className="header__main">
            <h1 className='header__title'>creative scroll</h1>
          </div>
        </Wrapper>
      </div>
    </header>
   );
}

export default Header;