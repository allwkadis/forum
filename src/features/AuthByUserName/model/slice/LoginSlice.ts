import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginShema } from "../types/LoginShema";
import { loginByUserName } from "../services/loginByUserName/loginByUserName";

const initialState: LoginShema = {
  username: "allwkadis",
  password: "123",
  isLoading: false,
  //   error: "aboba",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUserName.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    }),
      builder.addCase(loginByUserName.fulfilled, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(loginByUserName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  selectors: {
    selectUserName: (state) => state.username,
    selectPassword: (state) => state.password,
    selectIsLoading: (state) => state.isLoading,
    selectError: (state) => state.error,
  },
});

export const { actions: LoginActions, selectors: LoginSelectors } = loginSlice;
