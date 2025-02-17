import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";
import { useSelector } from "react-redux";

const RestaurantMenu = () => {
  const [showTitle, setShowTitle] = useState(null);

  // useParams is a hook used to read the parameters passed in the route => superpower
  const { resId } = useParams();

  // useRestaurantMenu is a custom hook for fetching menuData using API Call. We are storing data in redux store
  useRestaurantMenu(resId);

  const menuList = useSelector((store) => store.menu.menusById[resId]);

  // Conditional Rendering
  if (menuList == null) {
    return <Shimmer />;
  }

  return (
    <div className="text-center">
      <div className="p-2 w-6/12 m-auto">
        <h1 className="font-bold mt-6 text-2xl">{menuList.name}</h1>
        <p className="font-bold text-lg p-2">
          {" "}
          Cuisines -{menuList.cuisines.join(", ")} | Cost for two -{" "}
          {menuList.costForTwo / 100}
        </p>
        <p className="p-2">
          Area - {menuList.restaurantAddress.card.card.area}
        </p>
        <p className="p-2">
          Address - {menuList.restaurantAddress.card.card.completeAddress}{" "}
        </p>
      </div>

      {/* Iterate over menuList */}
      {menuList.filteredList.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={category?.card?.card?.title === showTitle ? true : false}
          setShowTitle={() => setShowTitle(category?.card?.card?.title)}
        />
      ))}
      {menuList.filteredList2.map((item) =>
        item?.card?.card?.categories.map((data, index) => (
          <RestaurantCategory
            key={data?.title}
            data={data}
            showItems={data?.title === showTitle ? true : false}
            setShowTitle={() => setShowTitle(data?.title)}
          />
        ))
      )}
    </div>
  );
};

export default RestaurantMenu;
