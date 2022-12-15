import { Language, PageLanguage } from "./types"

const home: PageLanguage = {
    title: 'Are you an introvert or an extrovert?',
    subtitle: 'find out what personality type you are',
    btnNext: 'start the test',
}

const test: PageLanguage = {
    title: 'question'
}

const result: PageLanguage = {
    title: 'Your result',
    btnRetake: 'Retake test',
    btnShowAnswers: 'Show My Answers'
}

export const english: Language = {
    page: {
        home,
        test,
        result
    }
}