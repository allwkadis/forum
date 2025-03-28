import { createSlice } from "@reduxjs/toolkit";
import { CounterShema } from "../types/CounterShema";

const initialState: CounterShema = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { actions: CounterActions } = counterSlice;
