import { act, fireEvent, render, RenderResult } from "@testing-library/react"
const BASE_TEST_ID = 'result-page';
let container: RenderResult = {} as RenderResult;
import { ResultPage } from './ResultPage'

beforeEach(() => {
    container = render(<ResultPage />)
})


describe('Results Page', () => {
    it ('renders page correctly', () => {
        const { getByTestId } = container;
        expect(getByTestId(BASE_TEST_ID)).toBeInTheDocument()
    })

    it ('has restart button rendered correctly', () => {
        const { getByTestId } = container;
        expect(getByTestId(BASE_TEST_ID + '-btn-restart')).toBeInTheDocument()
    })

    it ('has show answers button rendered correctly', () => {
        const { getByTestId } = container;
        expect(getByTestId(BASE_TEST_ID + '-btn-toggle-show')).toBeInTheDocument()
    })

    it ('detailed results are initially hidden', () => {
        const { queryByTestId } = container;
        expect(queryByTestId(BASE_TEST_ID + '-details')).toBeNull()
    })

    it ('detailed results are shown when toogle is clicked', async () => {
        const { queryByTestId, getByTestId } = container;

        await act(() => {
            fireEvent.click(getByTestId(BASE_TEST_ID + '-btn-toggle-show'))
        })
        

        expect(queryByTestId(BASE_TEST_ID + '-details')).not.toBeNull()
    })

})