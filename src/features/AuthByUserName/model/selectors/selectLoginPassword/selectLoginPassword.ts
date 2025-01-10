import { LoginShema } from "../../..";
import { RootState } from "../../../../../app/providers/StoreProvider/config/store";

export const selectLoginPassword = (state: RootState) => state.login.password 