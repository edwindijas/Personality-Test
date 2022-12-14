import { render } from "@testing-library/react";
import { appStateReducer } from "reducers";

it ('Page reducer changes to correct page', () => {
    const mockState = getMockState();
    const newState = appStateReducer(mockState, { store: 'page', type: 'change', payload: { page: 'test' } });
    expect(newState.page).toEqual('test');
})