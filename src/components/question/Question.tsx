import { useAppState } from "hooks/useAppState"
import { Answer } from "./Answer"
import { QuestionProps } from "./types"

const BASE_TEST_ID = 'question'

export const Question = ({ question }: QuestionProps) => {
    const {dispatch} = useAppState();

    const selectAns = (answerId: string) => {
        const questionId = question.id;
        dispatch({
            store: 'question',
            type: 'answer',
            payload: {
                answerId,
                questionId
            }
        })
    }

    return <div data-testid={BASE_TEST_ID} >
        <p data-testid='title' >{ question.title }</p>
        <ul  >
            { question.answers.map((answer, index) => {
                return <li key={answer.id} >
                    <Answer {...{index, answer, selectAns, currentAnswer: question.selectedAnswer}} />
                </li>
            }) }
        </ul>
    </div>
}