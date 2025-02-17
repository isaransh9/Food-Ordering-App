import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterRestaurantList, setRestaurantList } from "./restaurantSlice";
import {
  CHENNAI_RES_LIST_URL,
  KOL_RES_LIST_URL,
  PUNE_RES_LIST_URL,
} from "./constants";

const useRestaurant = () => {
  const dispatch = useDispatch();
  const restaurantList = useSelector(
    (store) => store.restaurants.restaurantList
  );
  const filterRestaurantList = useSelector(
    (store) => store.restaurants.filterRestaurantList
  );

  useEffect(() => {

    // Avoiding API call each time body component loads
    if (restaurantList.length === 0 || filterRestaurantList.length === 0) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(PUNE_RES_LIST_URL);
      const data2 = await fetch(KOL_RES_LIST_URL);
      const data3 = await fetch(CHENNAI_RES_LIST_URL);

      const response = await data.json();
      const response2 = await data2.json();
      const response3 = await data3.json();

      // Ensure both responses have the same structure and are valid
      const restaurants1 =
        response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      const restaurants2 =
        response2?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      const restaurants3 =
        response3?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      // Concatenate the two restaurant lists
      const finalList = [...restaurants1, ...restaurants2, ...restaurants3];

      // Dispatch the data to the store
      dispatch(setRestaurantList(finalList));
      dispatch(setFilterRestaurantList(finalList));
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };
};

export default useRestaurant;
