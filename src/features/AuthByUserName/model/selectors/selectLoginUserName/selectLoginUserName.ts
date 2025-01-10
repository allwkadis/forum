import { RootState } from "../../../../../app/providers/StoreProvider/config/store";

export const selectLoginUserName = (state: RootState) => state.login.username;
