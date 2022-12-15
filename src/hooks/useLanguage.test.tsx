import { render } from "@testing-library/react"
import { english } from "i18n/default.local"
import { useLanguage } from "./useLanguage"

const BASE_TEST_ID = 'use-language'

it ('Language has correct default language', () => {
    const Child = () => {
        const { home } = useLanguage()
        return <div data-testid={ BASE_TEST_ID + '-lang' } >{ home.btnNext }</div>
    }
    const { getByTestId } = render(<Child />)
    expect(getByTestId(BASE_TEST_ID + '-lang').textContent).toEqual(english.page.home.btnNext);
})