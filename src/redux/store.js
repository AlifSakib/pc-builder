import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "./features/pc-build/pc-build-slice";

export const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer,
  },
});
