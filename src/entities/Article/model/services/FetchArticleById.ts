import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "../../../../app/providers/StoreProvider";
import { Article } from "../..";

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>("articleDetails/fetchArticleById", async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<Article>(`/articles/${articleId}`);
    if (!response.data) {
      throw new Error("пустое значение");
    }
    return response.data;
  } catch (e) {
    console.error(e);
    return rejectWithValue(`Ошибка: ${e}`);
  }
});
