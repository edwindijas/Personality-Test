import { english } from "i18n/default.local";
import { useAppState } from "./useAppState"

export const useLanguage = () => {
    const { state } = useAppState(true);
    if (!state) {
        return english.page;
    }
    return state.lang.page;
}