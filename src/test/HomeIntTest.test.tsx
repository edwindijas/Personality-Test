import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import App from "App"

beforeEach(() => {
    render(<App />)
})

describe('User can move from', () => {
    it ('Home to Test Page', async () => {
        const { getByTestId } = screen;
        const buttonNext = getByTestId('home-page-btn-next');
        fireEvent.click(buttonNext);
        const testPage = getByTestId('test-page');
        await waitFor(() => {
            expect(testPage).toBeInTheDocument()
        });
    })
})