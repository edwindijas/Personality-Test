import { Language, PageLanguage } from "./types"

const home: PageLanguage = {
    title: 'Are you an introvert or an extrovert?',
    subtitle: 'find out what personality type you are',
    btnNext: 'start the test',
}

const test: PageLanguage = {
    title: 'question',
    btnNext: 'Next Question',
    btnPrev: 'Prev Question'
}

const result: PageLanguage = {
    title: 'Your result',
    btnRetake: 'Retake test',
    btnShowAnswers: 'Show My Answers'
}

const questions: PageLanguage = {
    allRequired: 'All questions are required'
}

export const english: Language = {
    page: {
        home,
        test,
        result,
        components: {
            questions
        }
    }
}