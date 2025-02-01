import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "../../../../app/providers/StoreProvider";
import { Comment } from "../../../../entities/Comment";

export const fetchCommentsbyArticleId = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>("articleDetails/fetchArticleById", async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    if (!articleId) {
      return rejectWithValue("не передан id статьи");
    }

    const response = await extra.api.get<Comment>("/comments", {
      params: {
        articleId,
        _expand: "user",
      },
    });

    if (!response.data) {
      throw new Error("пустое значение");
    }
    return response.data;
  } catch (e) {
    return rejectWithValue(`Ошибка: ${e}`);
  }
});
