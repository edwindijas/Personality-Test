import { fireEvent, getByTestId, render, RenderResult } from "@testing-library/react"
import { TestComp } from "./TestPage";
const BASE_TEST_ID = 'test-page';
let container: RenderResult = {} as RenderResult;

const questions = getMockQuestions()

beforeEach(() => {
    container = render(<TestComp questions={questions} />)
})


describe('Test Page', () => {
    it ('renders page correctly', () => {
        const { getByTestId } = container;
        expect(getByTestId(BASE_TEST_ID)).toBeInTheDocument()
    })

    it ('renders next test button', () => {
        const { getByTestId } = container;
        expect(getByTestId(BASE_TEST_ID + '-btn-next')).toBeInTheDocument()
    })

    it ('renders previous test button', () => {
        const { getByTestId } = container;
        expect(getByTestId(BASE_TEST_ID + '-btn-prev')).toBeInTheDocument()
    })

    it ('renders next button as disabled', () => {
        const { getByTestId } = container;
        const btnNext = getByTestId(BASE_TEST_ID + '-btn-next') as HTMLButtonElement;
        expect(btnNext.disabled).toEqual(true)
    })

    it ('renders prev as disabled', () => {
        const { getByTestId } = container;
        const btnNext = getByTestId(BASE_TEST_ID + '-btn-prev') as HTMLButtonElement;
        expect(btnNext.disabled).toEqual(true)
    })

})