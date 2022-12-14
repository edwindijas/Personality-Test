import { appStateReducer } from "reducers"

describe ('Question', () => {
    it ('can be answered correctly', () => {
        const state = getMockState();
        const questionId = state.questions.data[0].id,
            answerId = state.questions.data[0].answers[0].id;
        const newState = appStateReducer(state, { store: 'question', type: 'answer', payload: { questionId, answerId } });
        expect(newState.questions.data[0].selectedAnswer).toEqual(answerId);
    })


    it ('can be added correctly', () => {
        const mockQuestions = getMockQuestions();
        const state = getMockState('test', []);
        const newState = appStateReducer(state, { store: 'question', type: 'addAll', payload: { questions: getMockQuestions() } });
        expect(newState.questions.data.length).toEqual(mockQuestions.length);
    })
})