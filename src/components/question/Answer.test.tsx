import { render, screen } from "@testing-library/react"
import { Answer as Ans } from "models/types";
import { Answer } from "./Answer"

const questions = getMockQuestions();
const BASE_TEST_ID = 'answer';

const renderAnswer = (index = 0, currentAnswer?: string, ans?: Ans) => {
    const selectAns = () => {}
    const answer = ans ? ans : questions[0].answers[0];
    return render(<Answer {...{currentAnswer, index, answer, selectAns}} />)
}

describe('Question renders', () => {
    it ('main page correctly', () => {
        const {getByTestId}  = renderAnswer();
        expect(getByTestId(BASE_TEST_ID)).toBeInTheDocument()
    })

    it ('title', () => {
        const {getByTestId}  = renderAnswer();
        expect(getByTestId(BASE_TEST_ID + '-label').textContent).toEqual(questions[0].answers[0].label)
    })

    it ('has correct index A-Z', () => {

        Array(26).fill(0).map((value, index) => {
            renderAnswer(index);
        })
       
        let indexStr = '';
        let alphaStr = ''

        screen.getAllByTestId(BASE_TEST_ID + '-index').forEach((item, index)=> {
            indexStr += item.textContent;
            alphaStr += String.fromCharCode(65 + index);
        })

        expect(indexStr[0]).toEqual('A');
        expect(indexStr[25]).toEqual('Z');
        expect(indexStr).toEqual(alphaStr);
    })

    it ('tick correctly when not active', () => {
        const { queryByTestId }  = renderAnswer();
        expect( queryByTestId(BASE_TEST_ID + '-icon')).toBeNull()
    })

    it ('tick correctly when active', () => {
        const { queryByTestId }  = renderAnswer(0, questions[0].answers[0].id);
        expect( queryByTestId(BASE_TEST_ID + '-icon')).not.toBeNull()
    })

   
})