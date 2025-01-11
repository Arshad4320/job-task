// import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./RootApi/apiSlice";
// import { productSlice } from "../redux/features/product/productSlice";
// export const store = configureStore({
//   reducer: {
//     [apiSlice.reducerPath]: apiSlice.reducer,
//     product: productSlice,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
// });
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./RootApi/apiSlice";
import productReducer from "../redux/features/product/productSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
