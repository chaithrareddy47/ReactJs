import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    console.log(err);

    const { message} = err.error
    
  return (
    <div className="err-container">
          <h3>{err.status}.{ err.statusText}</h3>
          <p>{ message}</p>
    </div>
  )
}

export default Error
