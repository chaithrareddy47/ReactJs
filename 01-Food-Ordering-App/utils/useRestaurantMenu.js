import { useEffect, useState } from "react"


const useRestaurantMenu = (resId) => {
    const [info, setInfo] = useState(null)
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetch(
          `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`,
        );
        const response = await data.json();
        // console.log(response);
        const findCard = response?.data?.cards.find(
          (data) => data?.groupedCard?.cardGroupMap?.REGULAR?.cards,
        );
        // console.log(findCard);
        const menuData = findCard?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        // console.log(menuData);
        const menuCard = menuData?.find((data) => data?.card?.card);
        // console.log(menuCard);
        const items = menuCard?.card?.card?.itemCards;
        console.log(items);
        setInfo(items);
      };

      fetchData();
    }, []);
    return info;
}

export default useRestaurantMenu
