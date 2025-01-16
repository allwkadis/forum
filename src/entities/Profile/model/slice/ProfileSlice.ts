import { createSlice } from "@reduxjs/toolkit";
import { ProfileShema, fetchProfileData } from "../..";

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
  extraReducers(builder) {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    }),
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      state.isLoading = false
      state.profileData = action.payload
    }),
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
  selectors: {
    selectProfileData: (state) => state.profileData,
    selectProfileLoading: (state) => state.isLoading,
    selectProfileError: (state) => state.error
  },
});

export const { actions: profileActions, selectors: profileSelectors } =
  profileSlice;
