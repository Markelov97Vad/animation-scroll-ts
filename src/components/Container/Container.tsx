import { ContainerType } from "../utils/components.props";
import './Container.css'

function Container({ children } : ContainerType) {
  return ( 
    <div className="container">
      {children}
    </div>
   );
}

export default Container;