import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menusById: {},
  },
  reducers: {
    addMenu: (state, action) => {
      const { resId, menu } = action.payload;
      state.menusById[resId] = menu;
    },
  },
});

export const { addMenu, updateMenu, removeMenu } = menuSlice.actions;
export default menuSlice.reducer;
