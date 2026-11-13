import { useState } from "react"


const Login = () => {
    const [isAdded, setIsAdded] = useState(false)
    
    const handleChange = () => {
        setIsAdded((prev) => !prev)
    }
  return (
      <div>
          <button onClick={handleChange}>add food</button>
          {/* {
              isAdded &&  <h2>Food added to cart</h2>  
          }
       */}
          {
              isAdded === true ? <p>Food added</p> : <p>No fooed added</p>
          }
          
    </div>
  )
}

export default Login
