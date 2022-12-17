import { render } from "@testing-library/react"
import { Answer } from "models/types"
import { stringify } from "querystring"
import { Question } from "./Question"

const questions = getMockQuestions()

describe('Question renders', () => {
    it ('main page correctly', () => {
        const {getByTestId}  = render(<Question question={ questions[0] } />)
        expect(getByTestId('question')).toBeInTheDocument()
    })

    it ('renders answers comp', () => {
        const { getAllByTestId }  = render(<Question question={ questions[0] } />)
        expect( getAllByTestId('answer')).not.toBeNull()
    })

    it ('renders correct answers', () => {
        const {getAllByTestId}  = render(<Question question={ questions[0] } />)
        
        const compStr = questions[0].answers.reduce((a: Answer | string, b: Answer) => {
            if (typeof a === 'string') {
                return  a + b.label
            }

            return a.label + b.label
        });

        let answerStr = ''
        
        getAllByTestId('answer-label').map((item) => {
            answerStr += item.textContent;
        })

        expect(compStr).toEqual(answerStr);

    })
})