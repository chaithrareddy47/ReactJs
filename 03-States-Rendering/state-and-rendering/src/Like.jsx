import { useState } from "react"



const Like = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleChange = () => {
        setIsLoggedIn((prev) => !prev)
    }
  return (
    <div>
          {
              isLoggedIn ? <button onClick={handleChange}>Logout</button> : <button onClick={handleChange}>Login</button>
          }
          {
              isLoggedIn && <p>welcome to the coding </p>
          }
    </div>
  )
}

export default Like
