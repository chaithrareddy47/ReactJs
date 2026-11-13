import { CDN_URL } from "../utils/data";

const RestaurantCard = ({ resList }) => {
    console.log(resList);
    
    const { name, cloudinaryImageId, cuisines } = resList.info;
  return (
    <div className="res-card">
      <img src={`${CDN_URL}${cloudinaryImageId}`} alt="" className="res-img" />
      <p className="res-name">{name}</p>
          <p className="res-cusines">{cuisines.join(", ")}</p>
          <p className="res-area"></p>
    </div>
  );
}

export default RestaurantCard
