import { AppState } from "state/types";
import { pageReducer } from "./pageReducer";
import { questionsReducer } from "./questionsReducer";
import { AppStateReducerAction } from "./types";

export const appStateReducer = (state: AppState, action: AppStateReducerAction): AppState => {

    switch(action.store) {
        case 'question':
            return questionsReducer(state, action);
        case 'page':
            return pageReducer(state, action);
    }

    return state;
}