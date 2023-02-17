import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { isNavBarVisible: false };

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    hideNavBar(state) {
      state.isNavBarVisible = false;
    },
    showNavBar(state) {
      state.isNavBarVisible = true;
    },
  },
});

const store = configureStore({
  reducer: navSlice.reducer,
});

export const navActions = navSlice.actions;
export default store;
