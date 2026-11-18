import React, { useEffect } from 'react'
import { SWIGGY_API } from "../utils/data";

const Body = () => {
  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API)
    console.log(data);
    
  }
  return (
    <div>
      
    </div>
  )
}

export default Body
