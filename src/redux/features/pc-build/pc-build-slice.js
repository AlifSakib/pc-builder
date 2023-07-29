import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cpu: null,
  gpu: null,
  ram: null,
  motherboard: null,
  storage: null,
  powerSupply: null,
  case: null,
  cpuCooler: null,
  monitor: null,
};

const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    // setCPU(state, action) {
    //   state.cpu = action.payload;
    // },
    addToPcBuild(state, action) {
      const { category, product } = action.payload;
      state[category] = product;
    },
    removeFromPcBuild(state, action) {
      const { category } = action.payload;
      state[category] = null;
    },
  },
});

export const { addToPcBuild, removeFromPcBuild } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
