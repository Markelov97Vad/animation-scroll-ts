import hero from '../../image/hero.png'
import Container from '../Container/Container';
import './Header.css'

function Header() {

  return ( 
    <header className='header'>
      <img className='header__image' src={hero} alt="preview"/>
      <div className='header__container'>
        <Container>
          <h1 className='header__title'>creative scroll</h1>
        </Container>
      </div>
    </header>
   );
}

export default Header;