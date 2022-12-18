import { act, fireEvent, render, screen } from "@testing-library/react"
import App from "App"

import mockFetch from 'mock/mockFetch'

const questions = getMockQuestions()

beforeEach(async () => {
    jest.spyOn(window, 'fetch').mockImplementation(mockFetch)
    await act(async () => {
      render(<App />)
    })
})

describe('User can move from home to results page and restart', () => {
    it ('Home to Test Page', async () => {
        const { getByTestId, getAllByTestId } = screen;
        
        expect(getByTestId('home-page')).toBeInTheDocument()

        await act (() => {
            const { getByTestId } = screen;
            const buttonNext = getByTestId('home-page-btn-next');
            fireEvent.click(buttonNext);
        })

        const testPage = getByTestId('test-page');
        expect(testPage).toBeInTheDocument();

               
        for (let x = 0; x < questions.length; x++) {
            const answer = getAllByTestId('answer');
            const btnNext = getByTestId('test-page-btn-next') as HTMLButtonElement;

            await act(() => {
                fireEvent.click(answer[0]);
            })

            await act(() => {
                fireEvent.click(btnNext);
            })
        }

        const resultsPage = getByTestId('result-page');
        expect(resultsPage).toBeInTheDocument();

       await act(() => {
        fireEvent.click(getByTestId('result-page-btn-restart'))
       })

       expect(getByTestId('home-page')).toBeInTheDocument();

    })
})