import {  useState } from "react"


function FunctionCompo(props) {
    const [count,setCount] = useState(0)
    const handleClick = () => {
        setCount((prev) => prev + 1);
    }
  return (
    <div className="functional">
          <h1>{props.name }</h1>
          <p>{count }</p>
          <button onClick={handleClick}>+</button>
    </div>
  )
}

export default FunctionCompo
