import { render } from "@testing-library/react";
import React from "react";
import { AppStateProvider } from "state/AppStateProvider";
import { useAppState } from "./useAppState";

const mountHook = (child: React.ReactElement) => {
    return render(<AppStateProvider >
        { child }
    </AppStateProvider>)
}

describe ('useAppState', () => {
    it ('hook has correct initial values', () => {
        const testId = 'use-appState-str',
        Child = () => {
            const { state } = useAppState()
            return <div data-testid={testId} >{ state.page }</div>
        }

        const { getByTestId } = mountHook(<Child />);
        expect(getByTestId(testId).textContent).toEqual('home')

    })
})