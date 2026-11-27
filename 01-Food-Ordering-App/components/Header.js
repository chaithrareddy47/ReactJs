import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [isToggle,setIsToggle] = useState(false)
 
  const handleChange = () => {
  setIsToggle((prev) => !prev)
}
 const onlineStatus = useOnlineStatus()
  return (
    <div className="header-container">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="nav-links">
        <ul>
          <li>Online status : {onlineStatus ? "✅" : "🚫" }</li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact us</Link>
         
          {
            isToggle ? <button onClick={handleChange}>Login</button> : <button onClick={handleChange}>Logout</button>
          }
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
