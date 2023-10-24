import '../App.css';
import Logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink exact to={'/'} className="nav-link" aria-current="page">
            <img src={Logo} alt="React Logo" className="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            data-bs-theme="dark"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item fs-5">
                <NavLink to={'/'} className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item fs-5">
                <NavLink
                  to={'/contact'}
                  className="nav-link"
                  aria-current="page"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item fs-5">
                <NavLink to={'/about'} className="nav-link" aria-current="page">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
