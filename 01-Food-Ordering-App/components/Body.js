import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL } from "../utils/data";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
  const [allResturants, setAllRestaurants] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [search, setSearch] = useState("")
  const [isLoading,setIsLoading] = useState(true)

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
    // console.log(restCard);

    setListOfRestaurants(restCard);
    setAllRestaurants(restCard);
    setIsLoading(false)
  };

  const handleTopRestro = () => {
    console.log("btn clicked");
    const filterBtn = listOfRestaurants.filter(
      (items) => items.info.avgRating > 4.3,
      // console.log(items.info.avgRating > 4.3)
    );
    console.log(filterBtn);
    setListOfRestaurants(filterBtn);
  };

  const handleCleatBtn = () => {
    console.log("button cliked");
    // console.log(allResturants);

    setListOfRestaurants(allResturants);
    setSearch("")
  };

  const handleSearch = () => {
    console.log("button clicked");
    const filterBtn = allResturants.filter((data) => (
      // console.log(data.info.name)
      data.info.name.toLowerCase().includes(search.toLowerCase())
      
    ))
    console.log(filterBtn);

    setListOfRestaurants(filterBtn)
    
  }

  return (
    <div className="body-container">
      <div className="search">
        <div>
          <input
            type="text"
            placeholder="search restraurants"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>search</button>
        </div>
        <button onClick={handleTopRestro}>Top rated restro</button>
        <button onClick={handleCleatBtn}>clear</button>
      </div>


      {listOfRestaurants.length === 0 ? (
        <h2 className="res-heading">No restaurants found!</h2>
      ) : (
        <div className="res-container">
          {listOfRestaurants.map((data) => (
            <RestaurantCard key={data.info.id} resList={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
