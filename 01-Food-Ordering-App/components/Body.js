import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL } from "../utils/data";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    // console.log(data);
    const response = await data.json();
    // console.log(response);

    const cards = response.data.cards;

    const findCards = cards.find(
      (data) =>
        data?.card?.card?.gridElements?.infoWithStyle?.["@type"] ===
        "type.googleapis.com/swiggy.seo.widgets.v1.FoodRestaurantGridListingInfo",
      );
      
    const restCard =
      findCards.card.card.gridElements?.infoWithStyle?.restaurants;
      console.log(restCard);
      
    setListOfRestaurants(restCard)
    };
    
  return (
    <div className="body-container">
      <div className="search">
        <div>
          <input type="text" />
          <button>search</button>
        </div>
        <button>Top rated restro</button>
        <button>clear</button>
      </div>

      <div className="res-container">
              {
                  listOfRestaurants.map((data) => (
                      <RestaurantCard key={data.info.id} resList={data } />
                  ))
       }
      </div>
    </div>
  );
};

export default Body;
