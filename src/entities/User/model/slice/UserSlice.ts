import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserShema } from "../types/user";
import { USER_LOCALSTORAGE_KEY } from "../../../../shared/constants/localStorage";

const initialState: UserShema = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    intitAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logOut: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  selectors: {
    selectAuthData: (state) => state.authData,
  },
});

export const { actions: userActions, selectors: userSelectors } = userSlice;
