import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "../../../../../app/providers/StoreProvider";
import { Profile } from "../../..";

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("profile/fetchProfileData", async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<Profile>("/profile");
    return response.data;
  } catch (e) {
    console.error(e);
    return rejectWithValue(`Ошибка: ${e}`);
  }
});
