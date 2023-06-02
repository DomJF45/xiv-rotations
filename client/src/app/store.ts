import { configureStore } from "@reduxjs/toolkit";
import rotationReducer from "../features/rotation/rotationSlice";

export const store = configureStore({
  reducer: {
    rotationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
