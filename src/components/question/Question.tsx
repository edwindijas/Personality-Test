import { useAppState } from "hooks/useAppState"
import { useEffect, useState } from "react"
import { Answer } from "./Answer"
import { QuestionProps } from "./types"
import * as QuestEle from "./Question.style"
import { useLanguage } from "hooks/useLanguage"

const BASE_TEST_ID = 'question'

export const Question = ({ question, readonly }: QuestionProps) => {
    const {dispatch} = useAppState();
    const [currentAnswer, setCurrentAnswer] = useState(question.selectedAnswer);


    useEffect(() => {
        setCurrentAnswer(question.selectedAnswer);
    }, [question])

    const { components: { questions: lang } } = useLanguage();
    const selectAns = (answerId: string) => {
        if (readonly || !setCurrentAnswer) {
            return;
        }
        
        const questionId = question.id;
        setCurrentAnswer(answerId);
        dispatch && dispatch({
            store: 'question',
            type: 'answer',
            payload: {
                answerId,
                questionId
            }
        })
    }

    return <QuestEle.Wrapper data-testid={BASE_TEST_ID} >
        <QuestEle.Title data-testid='title' >{ question.title }</QuestEle.Title>
        <QuestEle.Req >{ lang.allRequired }</QuestEle.Req>
        <ul  >
            { question.answers.map((answer, index) => {
                return <li key={answer.id} >
                    <Answer {...{index, answer, selectAns, currentAnswer}} />
                </li>
            }) }
        </ul>
    </QuestEle.Wrapper>
}