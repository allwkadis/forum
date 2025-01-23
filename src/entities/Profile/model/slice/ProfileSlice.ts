import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Profile, ProfileShema, fetchProfileData } from "../..";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const initialState: ProfileShema = {
  isLoading: false,
  error: undefined,
  profileData: undefined,
  readonly: true,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.formData = state.profileData;
    },
    saveFormData: (state) => {
      state.readonly = true;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    }),
      builder.addCase(fetchProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profileData = action.payload;
        state.formData = action.payload;
      }),
      builder.addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
      builder.addCase(updateProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      }),
      builder.addCase(updateProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profileData = action.payload;
        state.formData = action.payload;
        state.readonly = true;
      }),
      builder.addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  selectors: {
    selectFormData: (state) => state.formData,
    selectProfileData: (state) => state.profileData,
    selectProfileLoading: (state) => state.isLoading,
    selectProfileError: (state) => state.error,
    selectProfileReadonly: (state) => state.readonly,
  },
});

export const { actions: profileActions, selectors: profileSelectors } =
  profileSlice;
