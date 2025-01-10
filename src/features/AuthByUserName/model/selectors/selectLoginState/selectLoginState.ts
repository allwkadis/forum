import { RootState } from "../../../../../app/providers/StoreProvider/config/store";
import { LoginShema } from "../../types/LoginShema";

export const selectLoginState = (state: RootState) => state.login