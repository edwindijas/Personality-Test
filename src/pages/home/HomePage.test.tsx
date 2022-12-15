import { getByTestId, render, RenderResult } from "@testing-library/react"
import { HomePage } from "./HomePage";
const BASE_TEST_ID = 'home-page';
let container: RenderResult = {} as RenderResult;

beforeEach(() => {
    container = render(<HomePage />)
})


describe('Home Page', () => {
    it ('renders page correctly', () => {
        const { getByTestId } = container;
        expect(getByTestId(BASE_TEST_ID)).toBeInTheDocument()
    })
})