import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Portfolio.css';

import { portfolioList } from "../utils/portfolioList";
import Wrapper from "../Wrapper/Wrapper";
import TextBlog from "../TextBlog/TextBlog";
import Gallery from "../Gallery/Gallery";

gsap.registerPlugin(ScrollTrigger)

function Portfolio() {
  useEffect(() => {
    const itemsR: string[] = gsap.utils.toArray(".gallery__right .gallery__item");
    const itemsL: string[] = gsap.utils.toArray(".gallery__left .gallery__item");

    itemsR.forEach((elem) => {
      gsap.fromTo(elem, 
        { opacity: 0, x: 150}, {
        opacity: 1, x: 0,
        scrollTrigger: {
          trigger: elem,
          start: "top 95%",
          end: "top 30%",
          scrub: true,
        }
      })
    })
    itemsL.forEach((elem) => {
      gsap.fromTo(elem, 
        { opacity: 0, x: -300 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
          trigger: elem,
          start: "top 110%",
          end: "top 50%",
          scrub: true,
        }
      })
    })
  },[])

  return ( 
    <section className="portfolio">
      <div className="portfolio__wrapper">
        <Wrapper>
          <article className="portfolio__gallery">
            <Gallery position="left" speed=".8">

              {portfolioList.map((el) => (
                el.id <= 2 &&  <img className="gallery__item" key={el.id} src={el.projectFoto} alt="pic" />
              ))}

              <TextBlog />

              <img className="gallery__item" src={portfolioList[5].projectFoto} alt="pic" />

            </Gallery>
            <Gallery position="right" speed="1.1">

              <TextBlog />

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