
import { useRouteError } from "react-router-dom"

const Error = () => {
  const err = useRouteError();
  console.log(err);
  
  return (
    <div className="err-page">
      <h4>{err?.status}.{ err?.statusText}</h4>
      <p>{err?.error?.message }</p>
    </div>
  )
}

export default Error
