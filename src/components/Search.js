import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterRestaurantList } from "../utils/restaurantSlice";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const restaurantList = useSelector(
    (store) => store.restaurants.restaurantList
  );

  const dispatch = useDispatch();

  return (
    <div className="filter flex flex-col md:flex-row">
      {/* Search Input */}
      <div className="search m-2 p-4">
        <input
          type="text"
          className="border border-solid border-gray-400 p-2 rounded-md focus:outline-none focus:border-gray-500"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search for restaurants..."
        />
        <button
          className="px-4 py-2 bg-green-400 text-white m-2 rounded-lg hover:bg-green-500 transition duration-300"
          onClick={() => {
            const filteredList = restaurantList.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            dispatch(setFilterRestaurantList(filteredList));
          }}
        >
          Search
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white m-2 rounded-lg hover:bg-red-500 transition duration-300"
          onClick={() => {
            setSearchText("");
            dispatch(setFilterRestaurantList(restaurantList));
          }}
        >
          Clear Filter
        </button>
      </div>

      {/* Top Rated Restaurants Button */}
      <div className="m-2 p-4">
        <button
          className="px-4 py-2 bg-gray-800 text-white m-2 rounded-lg hover:bg-gray-700 transition duration-300"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4.0
            );
            dispatch(setFilterRestaurantList(filteredList));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
    </div>
  );
};

export default Search;
