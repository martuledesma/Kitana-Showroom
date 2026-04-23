import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" style={{ letterSpacing: '2px' }} to="/">
          KITANA
        </Link>
        
        <div className="collapse navbar-collapse justify-content-center">
          <div className="navbar-nav">
            <NavLink className="nav-link mx-3 text-uppercase small" to="/category/remeras">Remeras</NavLink>
            <NavLink className="nav-link mx-3 text-uppercase small" to="/category/pantalones">Pantalones</NavLink>
            <NavLink className="nav-link mx-3 text-uppercase small" to="/category/vestidos">Vestidos</NavLink>
          </div>
        </div>

        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;