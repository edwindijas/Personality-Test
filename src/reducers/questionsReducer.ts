import produce from "immer";
import { Question } from "models/types";
import { AppState } from "state/types";
import { QuestionAnswerAction, QuestionsAddAllAction, QuestionsReducer, QuestionsResetAction } from "./types";

export const answerQuestion = (state: AppState, action: QuestionAnswerAction): AppState => {
    return produce(state, (draft) => {
        const questionIndex = draft.questions.data.findIndex((item) => item.id === action.payload.questionId);
        draft.questions.data[questionIndex].selectedAnswer = action.payload.answerId
        return draft;
    })
}

export const addQuestions = (state: AppState, action: QuestionsAddAllAction): AppState => {
    return produce(state, (draft) => {
        draft.questions.data = action.payload.questions
        return draft;
    })
}

export const resetAnswers = (state: AppState, action: QuestionsResetAction): AppState => {
    return produce(state, (draft) => {

        draft.questions.data.map(question => question.selectedAnswer = undefined);

        return draft;
    })
}


export const questionsReducer = (state: AppState, action: QuestionsReducer): AppState => {
    switch (action.type) {
        case 'answer':
            return answerQuestion(state, action);
        case 'addAll':
            return addQuestions(state, action)
    }
    return state;
}