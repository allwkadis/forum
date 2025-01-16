import { createAsyncThunk } from "@reduxjs/toolkit";

import { User, userActions } from "../../../../../entities/User";

import { USER_LOCALSTORAGE_KEY } from "../../../../../shared/constants/localStorage";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider";

interface LoginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<
  User,
  LoginByUserNameProps,
  ThunkConfig<string>
>("login/loginByUserName", async (authData, thunkAPI) => {
  const { dispatch, extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.post("/login", authData);

    if (!response.data) throw new Error("empty Data");

    window.localStorage.setItem(
      USER_LOCALSTORAGE_KEY,
      JSON.stringify(response.data)
    );

    dispatch(userActions.setAuthData(response.data));

    // window.location.pathname = "/profile";

    return response.data;
  } catch (e) {
    console.error(e);
    return rejectWithValue("Неправильный логин или пароль");
  }
});
