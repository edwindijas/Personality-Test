// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { MockQuestions } from 'mock/Questions.mock';
import { Questions } from 'models/Question';
import { Question } from 'models/types';
import { Pages } from 'pages/types';
import { AppState } from 'state/types';

export const getMockQuestions = (): Question[] => {
    return Questions.addId(MockQuestions)
}

export const getMockState = (page: Pages = 'home'): AppState => {
    return {
        page,
        questions: {
            currentQuestion: 0,
            data: getMockQuestions()
        }
    }
}

global.getMockState = getMockState
global.getMockQuestions = getMockQuestions