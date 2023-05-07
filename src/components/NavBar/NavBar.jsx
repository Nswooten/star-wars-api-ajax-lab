import { Link } from 'react-router-dom'

import reactLogo from '../../assets/react.svg'

const NavBar = () => {
  return ( 
    <>
    <header>
      <Link to={"/"}>
        <img className='logo' src={ reactLogo } alt="The React Logo" />
      </Link>
      <h1>Star Wars</h1>
      <nav>
        <Link to='/starships'>Starships</Link>
      </nav>
    </header>
    </>
  )
}

export default NavBar