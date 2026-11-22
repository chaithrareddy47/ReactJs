import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <Link to="/">
          <h1>#VANLIFE</h1>
        </Link>
      </div>
      <div className="nav-links">
        <ul>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </ul>
      </div>
    </div>
  );
}

export default Header
