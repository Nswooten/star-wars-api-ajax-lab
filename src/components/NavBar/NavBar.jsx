import { Link } from 'react-router-dom'

import reactLogo from '../../assets/react.svg'

const NavBar = () => {
  return ( 
    <>
    <header>
      <img className='logo' src={ reactLogo } alt="The React Logo" />
      <h2>StarWars</h2>
      <nav>
        <Link to='/starships'>Starships</Link>
      </nav>
    </header>
    </>
  )
}

export default NavBar