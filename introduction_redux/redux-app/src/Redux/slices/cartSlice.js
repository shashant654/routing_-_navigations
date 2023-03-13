import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload);
      if (cartItem) {
        cartItem.quantity += 1;
        return;
      } // agr item cart me mil jata hai toh hmm quantity me 1 se increment kr denge

      state.cart.push({
        // otherwise quantity 1 k saath cart me
        quantity: 1, //dal denge
        id: action.payload,
      });
    },

    removeFromCart: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload);
      if (cartItem) {
        cartItem.quantity -= 1; // agr cart me item pde hai toh remove krne k liye 1 se decrement kr denge

        if (cartItem.quantity === 0) {
          state.cart = state.cart.filter((item) => item.id !== action.payload); //if cart me item nhi pde ho jise hmne remove krna hai then uss item ko chod k rest of item ko bahar nikal denge and  update kr denge
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
