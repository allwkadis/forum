import { RootState } from "../../../../app/providers/StoreProvider/config/store";

export function selectCounter(state: RootState) {
    return state.counter.value
}