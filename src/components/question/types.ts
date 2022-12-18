import { Answer, Question } from "models/types";

type selectAns = (answerId: string) => void

export interface AnswerProps {
    answer: Answer;
    index: number;
    currentAnswer?: string;
    selectAns: selectAns
}

export interface QuestionProps {
    question: Question;
    readonly?: true
}