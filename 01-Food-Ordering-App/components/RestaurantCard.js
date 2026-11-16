import { CDN_URL } from "../utils/data";

const RestaurantCard = ({ resList }) => {
  // console.log(resList);
  const { slaString } = resList.info.sla;
    
    const { name, cloudinaryImageId, cuisines, avgRating, areaName } =
      resList.info;
  return (
    <div className="res-card">
      <img src={`${CDN_URL}${cloudinaryImageId}`} alt="" className="res-img" />

      <div className="res-desc">
        <p className="res res-name">{name}</p>
        <p className="res res-rating">
          {avgRating} .{slaString}
        </p>
        <p className="res res-cusines">{cuisines.join(", ")}</p>
        <p className="res res-area">{areaName}</p>
      </div>
    </div>
  );
}

export default RestaurantCard
