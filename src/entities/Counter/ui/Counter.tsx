import { CounterActions } from "../model/slice/CounterSlice";
import { selectCounter } from "../model/selectors";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/providers/StoreProvider";

export const Counter = () => {
  const dispatch = useAppDispatch();

  const increment = () => {
    dispatch(CounterActions.increment());
  };
  const decrement = () => {
    dispatch(CounterActions.decrement());
  };

  const test = useAppSelector((state) => selectCounter(state));

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
