import { createContext, useReducer } from "react"
import { AppState, AppStateProviderProps, AppStateContextValue } from "./types"
import { appStateReducer } from "reducers"
import { english } from "i18n/default.local";

export const AppStateContext = createContext<AppStateContextValue>({} as AppStateContextValue);

const defaultAppState: AppState = {
    page: 'home',
    lang: english,
    questions: {
        data: []
    }
}

export const AppStateProvider = ( {children}: AppStateProviderProps ) => {

    const [state, dispatch] = useReducer(appStateReducer, defaultAppState)

    return <AppStateContext.Provider value={{state, dispatch}} >
        { children }
    </AppStateContext.Provider>
}