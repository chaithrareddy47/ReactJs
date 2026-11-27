import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const info = useRestaurantMenu(resId)
  
return (
  <div className="res">
    {info?.map((data) => {
      const { id, name, imageId, price, category }=
        data?.card?.info || {};
      return (
        <div key={id} className="res-menu">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`}
            alt={name}
            className="resmenu-img"
          />
          <div>
            <p>{name}</p>
            <p>{price / 100}</p>
            <p>{category}</p>
          </div>
        </div>
      );
    })}
  </div>
);
}

export default RestaurantMenu

