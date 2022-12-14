import { Question } from "models/types";
import { Pages } from "pages/types";
import React, { Dispatch } from "react";
import { AppStateReducerAction } from "reducers/types";

export interface AppStateProviderProps {
    children?: React.ReactNode
}

export interface AppState {
    page: Pages,
    questions: {
        data: Question[],
        currentQuestion?: number
    }
}

export interface AppStateContextValue {
    state: AppState,
    dispatch: Dispatch<AppStateReducerAction>
}