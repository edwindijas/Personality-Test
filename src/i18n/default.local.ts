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
    btnShowAnswer: 'Show My Answers',
    btnHideAnswer: 'Hide My Answers',
    introvet: 'You are more of an introvert.',
    introMeaning: 'Introversion is a personality trait characterized by a focus on internal feelings rather than on external sources of stimulation. Introverts and extroverts are often viewed in terms of two extreme opposites, but the truth is that most people lie somewhere in the middle.',
    extrovert: 'You are more of an extrovert.',
    extroMeaning: 'Extroverts draw energy from social interactions. Do you love meeting new people? Does a big social event leave you feeling energized and renewed? If so, you might be an extrovert.'
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