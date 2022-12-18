

import { act, fireEvent, render, screen, waitFor } from "@testing-library/react"
import App from "App"
import mockFetch from "mock/mockFetch"

const BASE_TEST_ID = 'test-page';
const questions = getMockQuestions()

beforeEach(async () => {
    jest.spyOn(window, 'fetch').mockImplementation(mockFetch)
    
    await act(() => {
        render(<App />)
    })

    await act(() => {
        const { getByTestId } = screen;
        const buttonNext = getByTestId('home-page-btn-next');
        fireEvent.click(buttonNext);
    })
    
})

describe('Test Page ', () => {

    it ('renders next button as enabled when answer is selected', async () => {
        const { getByTestId, getAllByTestId } = screen;
        const answer = getAllByTestId('answer');
       
        await act(() => {
            fireEvent.click(answer[0]);
        })

        const btnNext = getByTestId(BASE_TEST_ID + '-btn-next') as HTMLButtonElement;
        expect(btnNext.disabled).toEqual(false);
            
    })

    it ('renders prev button as enabled when question is not one', async () => {
        const { getByTestId, getAllByTestId } = screen;
        const answer = getAllByTestId('answer');
       
        await act(() => {
            fireEvent.click(answer[0]);
        })

        const btnNext = getByTestId(BASE_TEST_ID + '-btn-next') as HTMLButtonElement;
        await act(() => {
            fireEvent.click(btnNext);
        })

        const btnPrev = getByTestId(BASE_TEST_ID + '-btn-prev') as HTMLButtonElement;

        expect(btnPrev.disabled).toEqual(false);
            
    })

    it ('Navigates to results page after finishing questions', async () => {
        const { getByTestId, getAllByTestId } = screen;
        const answer = getAllByTestId('answer');
               
        for (let x = 0; x < questions.length; x++) {
            const answer = getAllByTestId('answer');
            const btnNext = getByTestId(BASE_TEST_ID + '-btn-next') as HTMLButtonElement;

            await act(() => {
                fireEvent.click(answer[0]);
            })

            await act(() => {
                fireEvent.click(btnNext);
            })
        }

        const resultsPage = getByTestId('result-page');
        expect(resultsPage).toBeInTheDocument();
            
    })
    
    
})
