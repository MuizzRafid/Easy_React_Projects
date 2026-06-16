import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./redux/ecommerceSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});

export default store;
