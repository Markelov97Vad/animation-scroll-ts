import { ReactNode, RefObject } from "react";

export type GalleryProps = {
  refComp: RefObject<HTMLDivElement>,
  children: ReactNode; 
  position: string;
  speed: string
}