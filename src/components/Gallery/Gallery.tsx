import './Gallery.css'
import { GalleryProps } from "../types/componentProps.type";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function Gallery({children, position, speed }: GalleryProps) {

  return ( 
    <div data-speed={speed} className={`gallery gallery__${position}`}>
      {children}
    </div>
   );
}

export default Gallery;