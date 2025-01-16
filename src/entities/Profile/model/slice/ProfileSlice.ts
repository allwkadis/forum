import { createSlice } from "@reduxjs/toolkit";
import { ProfileShema } from "../..";

const initialState: ProfileShema = {
  isLoading: false,
  error: undefined,
  profileData: undefined,
  readonly: true,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  //  
  selectors: {},
});

export const { actions: profileActions, selectors: profileSelectors } =
  profileSlice;
