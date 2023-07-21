import {  ForwardedRef, LegacyRef, ReactElement, Ref, RefObject, forwardRef } from "react";

const TextBlog = forwardRef<HTMLDivElement>((props, ref) => {
  // const item = useRef(null)

  return (
      <div ref={ref} className="text-block gallery__item">
        <h2 className="text-block__title">Creative floating scroll with amazing parallax effect</h2>
        <p className="text-block__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.</p>
      </div>)
   
})

export default TextBlog;