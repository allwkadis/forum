import type { AxiosInstance } from "axios";
import { RootState } from "../config/store";

interface ThunkExtraArgs {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
  state: RootState;
}
