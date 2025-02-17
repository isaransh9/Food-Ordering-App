import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurantList: [],
    filterRestaurantList: [],
  },
  reducers: {
    setRestaurantList: (state, action) => {
      state.restaurantList = action.payload;
    },
    setFilterRestaurantList: (state, action) => {
      state.filterRestaurantList = action.payload;
    },
  },
});

export const { setRestaurantList, setFilterRestaurantList } =
  restaurantSlice.actions;
export default restaurantSlice.reducer;
