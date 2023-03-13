import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// here "production/fetch" is just like a string here we can write anything as a string
export const fetchData = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");

  return await response.json();
  // dispatch(loadProducts(data));
});

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    status: "idle", // idle ,lodaing,success,failed
    error: null,
  },
  // reducers: {
  //   loadProducts: (state, action) => {
  //     state.products = action.payload;
  //   },
  // },

  extraReducers: function(builder) {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })

      .addCase(fetchData.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "success";
      })

      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { loadProducts } = productSlice.actions;

export default productSlice.reducer;
// ye sbhi reducers ko combine krta hai

//   *****************************

// import { createSlice } from "@reduxjs/toolkit";

// const productSlice = createSlice({
//   name: "productSlice",
//   initialState: {
//     products: [],
//   },
//   reducers: {
//     loadProducts: (state, action) => {
//       state.products = action.payload;
//     },
//   },
// });

// export const { loadProducts } = productSlice.actions;

// export default productSlice.reducer;
// // ye sbhi reducers ko combine krta hai
