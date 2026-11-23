import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className="header-container">
          <ul>
            <Link to="/" className="link">Home</Link>
              <Link to="/product" className="link">Product</Link>
      </ul>
    </div>
  )
}

export default Header
