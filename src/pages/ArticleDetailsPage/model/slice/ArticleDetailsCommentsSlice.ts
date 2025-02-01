import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { Comment } from "../../../../entities/Comment";
import { RootState } from "../../../../app/providers/StoreProvider/config/store";
import { ArticleDetailsCommentShema } from "../types/ArticleDetailsCommentsShema";
import { fetchCommentsbyArticleId } from "../services/FetchCommentsByArticleId";

const commentsAdapter = createEntityAdapter<Comment>({
    // selectId: (state) => state.id 
});

export const getArticleComments = commentsAdapter.getSelectors<RootState>(
  (state) =>
    state.ArticleDetailsCommentsSlice || commentsAdapter.getInitialState()
);

export const ArticleDetailsCommentsSlice = createSlice({
  name: "ArticleDetailsCommentsSlice",
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentShema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCommentsbyArticleId.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    }),
      builder.addCase(
        fetchCommentsbyArticleId.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.error = undefined;
          commentsAdapter.setAll(state, action.payload)
        }
      ),
      builder.addCase(fetchCommentsbyArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  selectors: {
    selectIsLoading: (state) => state.isLoading,
    selectError: (state) => state.error,
  },
});

export const {
  actions: ArticleDetailsCommentsActions,
  selectors: ArticleDetailsCommentsSelectors,
} = ArticleDetailsCommentsSlice;
