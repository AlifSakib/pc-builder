import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    items: {},
    totalPrice: 0,
    totalItems: 0,
  },
];

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    // setCPU(state, action) {
    //   state.cpu = action.payload;
    // },
    // addToPcBuild(state, action) {
    //   const product = action.payload;
    //   state[product?.category] = product;
    // },
    // removeFromPcBuild(state, action) {
    //   const { category } = action.payload;
    //   state[category] = null;
    // },
    // addToPcBuild(state, action) {
    //   const product = action.payload;
    //   const existingProduct = state[0].items.find(
    //     (item) => item.id === product.id
    //   );
    //   if (!existingProduct) {
    //     state[0].items.push({
    //       ...product,
    //       quantity: 1,
    //     });
    //   } else {
    //     existingProduct.quantity++;
    //   }
    //   state[0].totalPrice += product.price;
    //   state[0].totalItems++;
    // },
    // removeFromPcBuild(state, action) {
    //   const { id } = action.payload;
    //   const existingProduct = state[0].items.find((item) => item.id === id);
    //   if (existingProduct.quantity === 1) {
    //     state[0].items = state[0].items.filter((item) => item.id !== id);
    //   } else {
    //     existingProduct.quantity--;
    //   }
    //   state[0].totalPrice -= existingProduct.price;
    //   state[0].totalItems--;
    // },
    addToPcBuild(state, action) {
      const product = action.payload;
      const existingProduct = state[0].items[product?.category];
      if (!existingProduct) {
        state[0].items[product?.category] = {
          ...product,
          quantity: 1,
        };
      } else {
        existingProduct.quantity++;
      }
      state[0].totalPrice += product.price;
      state[0].totalItems++;
    },
    removeFromPcBuild(state, action) {
      const { category } = action.payload;
      const existingProduct = state[0].items[category];
      if (existingProduct.quantity === 1) {
        delete state[0].items[category];
      } else {
        existingProduct.quantity--;
      }
      state[0].totalPrice -= existingProduct.price;
      state[0].totalItems--;
    },
  },
});

export const { addToPcBuild, removeFromPcBuild } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
