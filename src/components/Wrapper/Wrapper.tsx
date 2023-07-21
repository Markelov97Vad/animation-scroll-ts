
import { ReactNode } from "react";

import './Wrapper.css'

function Wrapper({ children} : { children: ReactNode}) {
  return ( 
    <div className="wrapper">
      {children}
    </div>
   );
}

export default Wrapper;