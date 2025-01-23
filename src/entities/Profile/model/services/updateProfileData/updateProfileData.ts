import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "../../../../../app/providers/StoreProvider";
import { Profile } from "../../..";
import {
  ValidateProfileError,
  validateProfileData,
} from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>("profile/updateProfileData", async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;
  const formData = getState().profile.formData;
  try {
    const response = await extra.api.put<Profile>("/profile", formData);
    const errors = validateProfileData(formData);

    if (errors) {
      return rejectWithValue(errors);
    }
    return response.data;
  } catch (e) {
    console.error(e);
    return rejectWithValue(["SERVER_ERROR"]);
  }
});
