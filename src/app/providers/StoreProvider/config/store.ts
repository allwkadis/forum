import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import { counterSlice } from "../../../../entities/Counter";
import { userSlice } from "../../../../entities/User";
import { loginSlice } from "../../../../features/AuthByUserName/model/slice/LoginSlice";
import { profileSlice } from "../../../../entities/Profile";
import { $api } from "../../../../shared/api/api";
import { ArticleDetailsSlice } from "../../../../entities/Article/model/slice/ArticleDetailsSlice";
import { ArticleDetailsCommentsSlice } from "../../../../pages/ArticleDetailsPage/model/slice/ArticleDetailsCommentsSlice";

const RootReducer = combineReducers({
  [loginSlice.name]: loginSlice.reducer,
  [counterSlice.name]: counterSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [profileSlice.name]: profileSlice.reducer,
  [ArticleDetailsSlice.name]: ArticleDetailsSlice.reducer,
  [ArticleDetailsCommentsSlice.name]: ArticleDetailsCommentsSlice.reducer,
});

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
        },
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
