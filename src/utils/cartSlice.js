import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    ids: [],
  },
  reducers: {
    // These are those reducer function which modifies the state based on actions
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.ids.push(action.payload.card.info.id);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload
      );
      state.ids = state.ids.filter((id) => id !== action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.ids.length = 0;
    },
  },
});

// This is how we export actions and reducer. Don't worry if you don't get this

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
