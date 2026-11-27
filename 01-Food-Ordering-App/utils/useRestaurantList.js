import { useEffect, useState } from "react";

const useRestaurantList = () => {
    const [allRestaurants,setAllRestaurants] = useState([])
    
      useEffect(() => {
         const fetchData = async () => {
           const data = await fetch(
             "https://namastedev.com/api/v1/listRestaurants"
           );
    
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
      
        }
        
        fetchData();
      }, [])
    
  return  allRestaurants
}

export default useRestaurantList
