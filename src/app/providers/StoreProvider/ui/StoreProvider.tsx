import { Provider } from "react-redux";
import { store } from "../config/store";

interface StoreProviderProps {
  chidlren: React.ReactNode;
}

export const StoreProvider = ({ chidlren }: StoreProviderProps) => {
  return <Provider store={store}>{chidlren}</Provider>;
};
