import React, { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/data";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listOfRestro, setListOfRestro] = useState([]);
  const [searchText,setsearchText] = useState("")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");

    const response = await data.json();
    // console.log(response);

    const findData = response?.data?.data?.cards?.find(
      (data) => data?.card?.card?.gridElements?.infoWithStyle,
    );
    // console.log(findData);

    const restaurant =
      findData?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // console.log(restaurant);
    setAllRestaurants(restaurant);
    setListOfRestro(restaurant);
  };

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
        {listOfRestro.map((data) => (
          <Link to={`${"restaurant/"}${data.info.id}`} key={data.info.id}>
            <RestaurantCard resList={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
