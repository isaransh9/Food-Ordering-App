import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    user: {
      loginCredentials: {},
      personalInfo: {},
      addresses: [], // Store addresses as an array
      paymentMethod: {},
      login: false,
    },
  },
  reducers: {
    logoutUser: (state) => {
      // Reset login-related state when logging out
      state.user.loginCredentials = {};
      state.user.personalInfo = {};
      state.user.addresses = [];
      state.user.paymentMethod = {};
      state.user.login = false;
    },
    addLoginDetails: (state, action) => {
      const { userName, email, password } = action.payload;
      state.user.loginCredentials = { email, password };
      state.user.login = true;
      state.user.personalInfo["name"] = userName;
      state.user.personalInfo["email"] = email;
    },
    addUserPersonalInfo: (state, action) => {
      state.user.personalInfo = action.payload;
    },
    addUserAddress: (state, action) => {
      // Add a new address to the addresses array
      console.log("Address added!");
      state.user.addresses.push(action.payload);
    },
    updateUserAddress: (state, action) => {
      // Update an existing address
      const { id, updatedAddress } = action.payload;
      const index = state.user.addresses.findIndex(
        (address) => address.id === id
      );
      if (index !== -1) {
        state.user.addresses[index] = {
          ...state.user.addresses[index],
          ...updatedAddress,
        };
      }
    },
    deleteUserAddress: (state, action) => {
      // Delete an address by id
      state.user.addresses = state.user.addresses.filter(
        (address) => address.id !== action.payload
      );
    },
    addUserPaymentMethod: (state, action) => {
      state.user.paymentMethod = action.payload;
    },
  },
});

export const {
  addUserPersonalInfo,
  addUserAddress,
  updateUserAddress,
  deleteUserAddress,
  addUserPaymentMethod,
  addLoginDetails,
  logoutUser,
} = userInfoSlice.actions;

export default userInfoSlice.reducer;
