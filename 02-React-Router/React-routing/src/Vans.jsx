import { useEffect, useState } from "react"
import VanCard from "./VanCard";



const Vans = () => {
 
    const [allInfo,setAllInfo] = useState([])
    const [vanInfo, setVanInfo] = useState([])
   
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("http://localhost:5173/api/vans");
            // console.log(data);
            const response = await data.json()
            const vanData = response?.vans
            // console.log(vanData);
            setVanInfo(vanData)  
            setAllInfo(vanData)
       
        }
        fetchData()
    }, [])

    const handleSimpleBtn = () => {
        // console.log("btn cliked");

        const filterBtn = allInfo.filter((data) => (
            data?.type === "simple"
        ))
        // console.log(filterBtn);
        setVanInfo(filterBtn) 
    }
    const handleLuxuryBtn = () => {
        // console.log("btn clicked");
          const filterBtn = allInfo.filter((data) => data?.type === "luxury");
          // console.log(filterBtn);
          setVanInfo(filterBtn); 
        
    }
    const handleRuggedBtn = () => {
        const filterBtn = allInfo.filter((data) => data?.type === "rugged");
        // console.log(filterBtn);
        setVanInfo(filterBtn); 
    }

    const handleClear = () => {
        setVanInfo(allInfo)
    }
  return (
      <div className="van-container">
          <h1>Explore our van options</h1>
          <div className="van-btn">
              <button className="btn"
              onClick={handleSimpleBtn}
              >Simple</button>
              <button className="btn"
              onClick={handleLuxuryBtn}
              >Luxury</button>
              <button className="btn"
              onClick={handleRuggedBtn}
              >Rugged</button>
              <button className="btn-type"
              onClick={handleClear}
              >clear filters</button>
             
          </div>
          <div className="van-card">
              {
                  vanInfo.map((data) => (
                      <VanCard key={data?.id} vanObj={ data} />
                  ))
             }
          </div>
    </div>
  )
}

export default Vans
