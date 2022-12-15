import { render } from "@testing-library/react"
import { useAppState } from "hooks/useAppState"
import { Pages } from "pages/types"
import { useEffect } from "react"
import { AppStateProvider } from "state/AppStateProvider"
import { Router } from "./Router"

export const getRouter = (page: Pages) => {
    const TestChild = () => {
        const { dispatch } = useAppState();

        useEffect(() => {
            dispatch({ store: 'page', type: 'change', payload: { page } })
        }, [])

        return <></>
    }

    return render(<AppStateProvider >
        <Router />
        <TestChild />
    </AppStateProvider>)
}



describe ('Correctly render page', () => {
    it ('home', () => {
        const { getByTestId } = getRouter('home');
        expect(getByTestId('home-page')).toBeInTheDocument()
    })

    it ('test', () => {
        const { getByTestId } = getRouter('test');
        expect(getByTestId('test-page')).toBeInTheDocument()
    })

    it ('result', () => {
        const { getByTestId } = getRouter('result');
        expect(getByTestId('result-page')).toBeInTheDocument()
    })
})