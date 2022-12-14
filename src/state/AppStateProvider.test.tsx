import { render } from "@testing-library/react";
import { useAppState } from "hooks/useAppState";
import React from "react";
import { AppStateProvider } from "./AppStateProvider";

const BASE_TEST_ID = 'app-state-test'

const mountAppStateProvider = (child?: React.ReactNode) => {
    return render(<AppStateProvider >{child}</AppStateProvider>)
}

describe('AppStateProvider', () => {
    it ('renders children properly', () => {
        const testId = BASE_TEST_ID + '-str',
            { getByTestId } = mountAppStateProvider(<div data-testid={testId}>hello world</div>);

        expect(getByTestId(testId).textContent).toEqual('hello world');
    })

    it ('has correct initial values', () => {
        const testId = BASE_TEST_ID + '-str',
            Child = () => {
                const {state} = useAppState();
                return <div data-testid={testId}>{ state.page }</div>
            },
            { getByTestId } = mountAppStateProvider(<Child />);

        expect(getByTestId(testId).textContent).toEqual('home');
    })

})