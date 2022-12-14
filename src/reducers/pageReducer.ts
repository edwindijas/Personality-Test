import produce from "immer";
import { AppState } from "state/types";
import { PageChangeAction, PagesReducer } from "./types";

const pageChange = (state: AppState, action: PageChangeAction): AppState => {
    return produce(state, (draft) => {
        draft.page = action.payload.page;
        return draft;
    })
}

export const pageReducer = (state: AppState, action: PagesReducer ): AppState => {
    switch (action.type) {
        case 'change':
            return pageChange(state, action)
    }
    return state;
}