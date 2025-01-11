import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setId(state, { payload }) {
      state.id = payload;
    },
    resetId(state) {
      state.id = null;
    },
  },
});

export const { setId, resetId } = productSlice.actions;

export default productSlice.reducer;
