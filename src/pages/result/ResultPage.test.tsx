import { render, RenderResult } from "@testing-library/react"
const BASE_TEST_ID = 'result-page';
let container: RenderResult = {} as RenderResult;
import { ResultPage } from './ResultPage'

beforeEach(() => {
    container = render(<ResultPage />)
})


describe('Home Page', () => {
    it ('renders page correctly', () => {
        const { getByTestId } = container;
        expect(getByTestId(BASE_TEST_ID)).toBeInTheDocument()
    })
})