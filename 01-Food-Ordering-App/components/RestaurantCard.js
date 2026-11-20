
import { CDN_URL } from "../utils/data";
const RestaurantCard = ({ resList }) => {
  // console.log(resList);
  const { name, cloudinaryImageId, avgRating, cuisines, locality } =
    resList.info;
  const {slaString } = resList.info.sla;
  
  return (
    <div className="res-card">
      <div className="res-img">
        <img src={`${CDN_URL}${cloudinaryImageId}`} alt={name} />
      </div>
      <div className="res-desc">
        <p className="res-name">{name}</p>
        <p className="res-ratings">
          {avgRating}.{slaString}
        </p>
        <p className="res-cusines">{cuisines.join(", ")}</p>
        <p className="res-add">{locality}</p>
      </div>
    </div>
  );
}

export default RestaurantCard
