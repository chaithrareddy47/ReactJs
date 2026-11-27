import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const allRestaurants = useRestaurantList()
  
  const [listOfRestro, setListOfRestro] = useState([]);

  useEffect(() => {
    setListOfRestro(allRestaurants)
  }, [allRestaurants])
  
  const [searchText,setsearchText] = useState("")


 

  const handleSearch = () => {
    console.log("button cliked")
    const filterRestro = listOfRestro.filter((data) =>
      data?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filterRestro);
    setListOfRestro(filterRestro)
  
  }

  const handleClear = () => {
    setListOfRestro(allRestaurants)
    setsearchText("")
  }

  const handleTopRestro = () => {
    const topRestro = allRestaurants.filter((data) => data.info.avgRating > 4.3)
    setListOfRestro(topRestro)
  }
  

  return (
    <div>
      <div className="search-container">
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button onClick={handleSearch}>search</button>
        </div>
        <button onClick={handleTopRestro}>Top Rated Restro</button>
        <button onClick={handleClear}>clear</button>
      </div>
      <div className="res-card-container">
        {
          listOfRestro.map((data) => (
          <Link to={`${"restaurant/"}${data.info.id}`} key={data.info.id}>
            <RestaurantCard resList={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
