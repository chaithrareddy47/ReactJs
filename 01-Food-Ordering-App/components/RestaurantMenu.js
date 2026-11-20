import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const RestaurantMenu = () => {
  const [info, setInfo] = useState([])

  const { resId } = useParams();
  console.log(resId);
  
  
  
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`
    );
    const response = await data.json()
    // console.log(response);
    const findCard = response?.data?.cards.find(
      (data) => data?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    // console.log(findCard);
    const menuData = findCard?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log(menuData);
    const menuCard = menuData?.find((data) => (
      data?.card?.card
    ))
    // console.log(menuCard);
    const items = menuCard?.card?.card?.itemCards
    console.log(items); 
setInfo(items)
  }

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

