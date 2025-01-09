import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../../../../entities/Counter";
import { useDispatch, useSelector } from "react-redux";

const RootReducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
});

export const store = configureStore({
  reducer: RootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
