import { Question } from "models/types";
import { Pages } from "pages/types";

export interface QuestionBasicReducer {
    store: 'question';
}

export interface QuestionAnswerAction extends QuestionBasicReducer {
    type: 'answer'
    payload: {
        questionId: string,
        answerId: string
    }
}

export interface QuestionsAddAllAction extends QuestionBasicReducer {
    type: 'addAll'
    payload: {
        questions: Question[]
    }
}

export interface QuestionsResetAction extends QuestionBasicReducer {
    type: 'reset'
}

export interface PageChangeAction {
    store: 'page';
    type: 'change'
    payload: {
        page: Pages
    }
}

export type PagesReducer = PageChangeAction

export type QuestionsReducer = QuestionAnswerAction | QuestionsAddAllAction | QuestionsResetAction;

export type AppStateReducerAction = QuestionsReducer | PagesReducer