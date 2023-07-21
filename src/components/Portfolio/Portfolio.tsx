import './Portfolio.css'
import { portfolioList } from "../utils/portfolioList";
import Wrapper from "../Wrapper/Wrapper";
import TextBlog from "../TextBlog/TextBlog";
import Gallery from "../Gallery/Gallery";
import { RefObject, useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


function Portfolio() {
  
  const TextBlogRef = useRef<HTMLDivElement>(null);
  const compRef = useRef<HTMLDivElement>(null);
  // const TextBlogRef = useRef<HTMLInputElement | RefObject<HTMLDivElement> | null>(null);

  useEffect(() => {
    let itemsL = gsap.utils.toArray(".gallery__left .gallery__item")
    itemsL.forEach((elem) => {
      gsap.fromTo(elem as [], 
        {opacity: 0, x: -50 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
          trigger: elem as [],
          start: '-850',
          end: '-100',
          scrub: true,
        }
      })
    })
    let itemsR = gsap.utils.toArray(".gallery__right .gallery__item")
    itemsR.forEach((elem) => {
      gsap.fromTo(elem as [], 
        {x: 40, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
          trigger: elem as [],
          start: '-750',
          end: 'top',
          scrub: true,
        }
      })
    })
  },[])
  return ( 
    <section className="portfolio">
      <div className="portfolio__wrapper">
        <Wrapper>
          <article ref={compRef} className="portfolio__gallery">
            <Gallery refComp={TextBlogRef} position="left" speed=".9">

              {portfolioList.map((el) => (
                el.id <= 2 &&  <img className="gallery__item" key={el.id} src={el.projectFoto} alt="pic" />
              ))}

              <TextBlog ref={TextBlogRef} />

              <img className="gallery__item" src={portfolioList[5].projectFoto} alt="pic" />

            </Gallery>
            <Gallery refComp={TextBlogRef} position="right" speed="1.1">

              <TextBlog ref={TextBlogRef}/>

              {portfolioList.map((el) => (
                  (el.id > 2 && el.id <= 5) &&  <img className="gallery__item" key={el.id} src={el.projectFoto} alt="pic" />
              ))}
            </Gallery>
          </article>
        </Wrapper>
      </div>
    </section>
   );
}

export default Portfolio;