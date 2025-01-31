import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ArticleDetailsShema } from "../..";
import { fetchArticleById } from "../services/FetchArticleById";
import { Article } from "../..";

const initialState: ArticleDetailsShema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const ArticleDetailsSlice = createSlice({
  name: "ArticleDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.isLoading = true;
      state.data = undefined
      state.error = undefined;
    }),
      builder.addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false;
          state.error = undefined;
          state.data = action.payload;
        }
      ),
      builder.addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  selectors: {
    selectArticaleDetailsData: (state) => state.data,
    selectArticaleDetailsLoading: (state) => state.isLoading,
    selectArticaleDetailError: (state) => state.error,
  },
});

export const {
  actions: ArticleDetailsActions,
  selectors: ArticleDetailsSelectors,
} = ArticleDetailsSlice;
