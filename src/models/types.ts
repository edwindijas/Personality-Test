import { omit } from "lodash";

export interface Answer {
    label: string;
    value: number;
    id: string;
}

export type AnswerWithoudId = Omit<Answer, 'id'>


export interface Question {
    title: string;
    id: string;
    selectedAnswer?: string;
    answers: Answer[];
}


export interface QuestionWithoutId extends Omit<Question, 'id' | 'answers'> {
    answers: AnswerWithoudId[]
}