import { useContext } from "react"
import { AppStateContext } from "state/AppStateProvider"

export const useAppState = (allowEmpty = false) => {

    const context = useContext(AppStateContext)

    if (!context && !allowEmpty) {
        throw new Error('Cannot use app state outside of context');
    }

    return context;
}