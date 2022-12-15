import { getByTestId, render, RenderResult } from "@testing-library/react"
import { TestPage } from "./TestPage";
const BASE_TEST_ID = 'test-page';
let container: RenderResult = {} as RenderResult;

beforeEach(() => {
    container = render(<TestPage />)
})


describe('Home Page', () => {
    it ('renders page correctly', () => {
        const { getByTestId } = container;
        expect(getByTestId(BASE_TEST_ID)).toBeInTheDocument()
    })
})