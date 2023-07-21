import { ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import './Gallery.css'
// import { ChildrenPropsType } from "../types/components.types";
import { ContainerType } from "../utils/components.props";
import { GalleryProps } from "../types/componentProps.type";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function Gallery({refComp ,children, position, speed }: GalleryProps) {
  const gallery = useRef<HTMLDivElement>(null)
  
  
  useEffect(() => {
    // gsap.fromTo(gallery.current, { opacity: 0}, {
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: gallery.current,
    //     scrub: true
    //   }
    // })
    // if( position === 'left') {
      // let itemsL = gsap.utils.toArray(".gallery__left .gallery__item")
      // gsap.fromTo(itemsL, 
      //   {x: -500, opacity: 0}, {
      //   opacity: 1, x: 0,
      //   scrollTrigger: {
      //     trigger: itemsL as unknown as undefined,
      //     scrub: true
      //   }
      // })
      // itemsL.forEach((item : any) => {
      //   gsap.fromTo(item, { opacity: 0, x: -500 }, {
      //     opacity: 1, x: 0,
      //     scrollTrigger: {
      //       trigger: item,
      //       start: '-850',
      //       end: '-100',
      //       scrub: true
      //     }
      //   })
      // })
    // }

  },[])

  return ( 
    <div ref={gallery} data-speed={speed} className={`gallery gallery__${position}`}>
      {children}
    </div>
   );
}

export default Gallery;