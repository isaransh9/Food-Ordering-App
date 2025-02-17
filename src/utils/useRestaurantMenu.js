import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMenu } from "./menuSlice";

const useRestaurantMenu = (resId) => {
  const [menuList, setMenuList] = useState(null);

  const dispatch = useDispatch();

  const menusById = useSelector((store) => store.menu.menusById);

  useEffect(() => {
    if (menusById[resId] == null) {
      fetchData();
    }
  }, [resId]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    // fetching restaurant data dynamically
    const list = await data.json();

    const name = list?.data?.cards[2]?.card?.card?.info?.name;
    const cuisines = list?.data?.cards[2]?.card?.card?.info?.cuisines;
    const costForTwo = list?.data?.cards[2]?.card?.card?.info?.costForTwo;
    const filteredList =
      list?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    const filteredList2 =
      list?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );

    const restaurantAddress =
      list?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
        -1
      )[0];

    const menu = {
      name,
      cuisines,
      costForTwo,
      filteredList,
      filteredList2,
      restaurantAddress,
    };

    dispatch(addMenu({ resId, menu }));
    setMenuList(list);
  };

  return menuList;
};

export default useRestaurantMenu;
