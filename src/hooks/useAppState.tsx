import { useContext, useReducer } from "react"
import { AppStateContext } from "state/AppStateProvider"

export const useAppState = () => {

    const context = useContext(AppStateContext)

    if (!context) {
        throw new Error('Cannot use app state outside of context');
    }

    return context;
}