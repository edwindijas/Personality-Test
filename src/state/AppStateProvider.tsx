import { createContext, useEffect, useReducer } from "react"
import { AppState, AppStateProviderProps, AppStateContextValue } from "./types"
import { appStateReducer } from "reducers"
import { english } from "i18n/default.local";
import { Questions } from "models/Question";

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
    useEffect(() => {

        Questions.get().then(data => {
            const questions = Questions.addId(data)
            dispatch({ store: 'question',type: 'addAll', payload: { questions } })
        })

    }, [])
    return <AppStateContext.Provider value={{state, dispatch}} >
        { children }
    </AppStateContext.Provider>
}