import { useState } from "react";

const Header = () => {
  const [isToggle,setIsToggle] = useState(false)
 
  const handleChange = () => {
   
    
  setIsToggle((prev) => !prev)
}
 
  return (
    <div className="header-container">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          {
            isToggle ? <button onClick={handleChange}>Login</button> : <button onClick={handleChange}>Logout</button>
          }
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
