import { useState } from "react";
import Login from "./Login";
import Like from "./Like";
import Unlike from "./Unlike";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Logout");
  
  // const handleChange = () => {
  //   setIsLoggedIn((prev) => !prev)
  // }
  const handlechange = () => {
    setIsLoggedIn((prev) => 
    prev === "Logout" ? "Login" : "Logout"
    )
  }
  return (
    <div>
      <h1>Conditional Rendering</h1>
      <p>Method 1: Conditional rendering using the ternary operator</p>
      {/* {
        isLoggedIn ? <button onClick={handleChange}>Logout</button> : <button onClick={handleChange}>Login</button>
      } */}
      <button onClick={handlechange}>{isLoggedIn}</button>
      <Login />
      <Like />
      <Unlike/>
    </div>
  );
}

export default App
