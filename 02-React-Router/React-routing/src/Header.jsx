import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="header-container">
          <div>
              <h1>#VANLIFE</h1>
      </div>
          <div className="nav-links">
              <ul>
                 <Link to="/about">About</Link>
                  <Link to="/vans">Vans</Link>
              </ul>
      </div>
    </div>
  )
}

export default Header
