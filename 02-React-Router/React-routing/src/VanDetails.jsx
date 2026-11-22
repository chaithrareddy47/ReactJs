
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const VanDetails = () => {
    const params = useParams()
    console.log(params);
    const [vanInfo,setVanInfo]= useState([])

    useEffect(() => {
        const fetchData = async() => {
            const data = await fetch(
              `${"http://localhost:5173/api/vans/"}${params.id}`,
            );
            const response = await data.json()
            const responseData = response?.vans
            // console.log(responseData)
            setVanInfo(responseData)
            
        }
        fetchData()
    },[])
    
    const { imageUrl,name } = vanInfo;
    // console.log(imageUrl);
    
    
  return (
    <div className="van-details">
      <div>
        <Link to="/vans">
          <p className="back"> ⬅️ Back to all vans</p>
        </Link>
      </div>
      <div className="van-detail-desc">
              <img src={imageUrl} alt={name} 
                  className="van-details-img"
        />
      </div>
    </div>
  );
}

export default VanDetails
