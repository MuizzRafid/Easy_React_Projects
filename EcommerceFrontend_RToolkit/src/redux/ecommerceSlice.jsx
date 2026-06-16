import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  cardProduct: localStorage.getItem("cproducts")
    ? JSON.parse(localStorage.getItem("cproducts"))
    : [],
};

export const ecommerceSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload);
      state.product = action.payload;
    },
    addCardProduct: (state, action) => {
      state.cardProduct.push(action.payload);

      localStorage.setItem("cproducts", JSON.stringify(state.cardProduct));

      console.log(state.cardProduct);
    },
    removeCardProduct: (state, action) => {
      const removeCard = action.payload;
      const index = state.cardProduct.findIndex((cp) => cp.id === removeCard);
      if (index >= 0) {
        state.cardProduct.splice(index, 1);
        localStorage.setItem("cproducts", JSON.stringify(state.cardProduct));
      }
    },
  },
});

export const { addProduct, addCardProduct, removeCardProduct } =
  ecommerceSlice.actions;

export default ecommerceSlice.reducer;
