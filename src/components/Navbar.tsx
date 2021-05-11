import { useContext } from 'react';
import { Link } from 'react-router-dom';
//import { GlobalContext } from '../context/GlobalContext';

const Navbar = () => {
 // const { cart } = useContext(GlobalContext);
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      {/* Logo */}
      <Link to='/' className='navbar-brand'>
        Home
      </Link>

      {/* Menu */}
      <div className='collapse navbar-collapse'>
        <div className='navbar-nav'>
          <Link className='nav-link' to='/SingleDrink'>
            Drinks
          </Link>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;