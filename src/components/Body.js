import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurant from "../utils/useRestaurant";
import { useSelector } from "react-redux";
import Search from "./Search";

const Body = () => {
  // Fetching data using custom hook -> Good Practice
  useRestaurant();

  // Getting restaurant data from redux store
  const filterRestaurantList = useSelector(
    (store) => store.restaurants.filterRestaurantList
  );

  // withOpenLabel is a Higher Order Component which adds OPEN label upon the restaurant cards
  const RestaurantCardLabel = withOpenLabel(RestaurantCard);

  // To show error when the user is offine
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );
  }

  return filterRestaurantList.length === 0 ? (
    <>
      <Shimmer />
    </>
  ) : (
    <div className="body">
      <Search />
      <div className="flex flex-wrap m-4 p-2">
        {filterRestaurantList.map((resList) => (
          <Link key={resList.info.id} to={"/restaurant/" + resList.info.id}>
            {resList.info.isOpen ? (
              <RestaurantCardLabel resData={resList} />
            ) : (
              <RestaurantCard resData={resList} />
            )}
          </Link>
          // Key should be on parent jsx that is being mapped
        ))}
      </div>
    </div>
  );
};

export default Body;
