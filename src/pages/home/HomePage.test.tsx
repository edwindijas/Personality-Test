import { getByTestId, render, RenderResult } from "@testing-library/react"
import { HomePage } from "./HomePage";
const BASE_TEST_ID = 'home-page';
let container: RenderResult = {} as RenderResult;

beforeEach(() => {
    container = render(<HomePage />)
})


describe('Home Page renders ', () => {
    it ('page correctly', () => {
        const { getByTestId } = container;
        expect(getByTestId(BASE_TEST_ID)).toBeInTheDocument()
    })

    it ('button next', () => {
        const { getByTestId } = container;
        expect(getByTestId(BASE_TEST_ID + '-btn-next')).toBeInTheDocument()
    })

    it ('title', () => {
        const { getByTestId } = container;
        expect(getByTestId(BASE_TEST_ID + '-title')).toBeInTheDocument()
    })

    it ('subtitle', () => {
        const { getByTestId } = container;
        expect(getByTestId(BASE_TEST_ID + '-subtitle')).toBeInTheDocument()
    })

})