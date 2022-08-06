import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <div className="wave-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-logo"
      />
      <h1 className="wave-heading">Wave</h1>
    </div>
    <ul className="nav-items-container">
      <li className="nav-item">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
