import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import restaurantsReducer from "./restaurantSlice";
import menuReducer from "./menuSlice";
import userInfoReducer from "./userInfoSlice";

// This is how you can create a redux store
const appStore = configureStore({
  // This is the main reducer for redux store
  reducer: {
    // Here we can have reducers for each slice. For now we have only one
    cart: cartReducer,
    restaurants: restaurantsReducer,
    menu: menuReducer,
    userInfo: userInfoReducer,
  },
});

export default appStore;
