import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { iPost, iUserState } from "../../utils/types";

const initialState: iUserState = {
  userName: "",
  saved: [],
  liked: [],
  rotations: JSON.parse(localStorage.getItem("rotations") || "[]"),
};

export const rotationSlice = createSlice({
  name: "rotation",
  initialState,
  reducers: {
    addRotation: (state, action: PayloadAction<iPost>) => {
      state.rotations.push(action.payload);
      localStorage.setItem("rotations", JSON.stringify(state.rotations));
    },
    removeRotation: (state, action: PayloadAction<string>) => {
      const newState = state.rotations.filter((post) => {
        return post.id !== action.payload;
      });
      state.rotations = newState;
      localStorage.setItem("rotations", JSON.stringify(state.rotations));
    },
    likeRotation: (state, action: PayloadAction<string>) => {
      state.liked.push(action.payload);
    },
    removeLikedRotation: (state, action: PayloadAction<string>) => {
      const newState = state.liked.filter((postId) => {
        return postId !== action.payload;
      });
      state.liked = newState;
    },
    saveRotation: (state, action: PayloadAction<string>) => {
      state.saved.push(action.payload);
    },
    removeSavedRotation: (state, action: PayloadAction<string>) => {
      const newState = state.saved.filter((postId) => {
        return postId !== action.payload;
      });
      state.saved = newState;
    },
  },
});

export const { addRotation, removeRotation, likeRotation, saveRotation } =
  rotationSlice.actions;
export default rotationSlice.reducer;
