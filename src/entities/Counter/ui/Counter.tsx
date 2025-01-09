import { useDispatch, useSelector } from "react-redux";
import { CounterActions, CounterSelectors } from "../model/slice/CounterSlice";


import cls from "./Counter.module.css";
import { useAppDispatch, useAppSelector } from "../../../app/providers/StoreProvider";

export const Counter = () => {
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(CounterActions.increment());
  };
  const decrement = () => {
    dispatch(CounterActions.decrement());
  };

  const value = useSelector(CounterSelectors.selectCounter);
  const test = useAppSelector(CounterSelectors.selectCounter);

  return (
    <div>
      <h1>Counter: {test}</h1>
      <button type="button" onClick={increment}>
        increment
      </button>
      <button type="button" onClick={decrement}>
        decrement
      </button>
    </div>
  );
};
