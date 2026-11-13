import { useState } from "react"


const Unlike = () => {
    const [isLiked, setIsLiked] = useState(null)
    const handleLike = () => {
        setIsLiked((prev) => !prev)
    }
  return (
    <div>
          <button onClick={handleLike}>
              {
                  isLiked ? "unlike" : "like"
              }
          </button>
          {
              isLiked !== null && (
                  <p>{
                      isLiked ? "You liked 🩷" : "u unliked 💔"
              }</p>)
          }
    </div>
  )
}

export default Unlike
