import { useAppState } from "hooks/useAppState";
import { useLanguage } from "hooks/useLanguage";
import { HomeStyle } from "./HomePage.styles";

const BASE_TEST_ID = 'home-page';

export const HomePage = () => {
    return <Home />
}

export const Home = () => {
    const { home : lang } = useLanguage();

    const { dispatch } = useAppState();

    const goToNextPage = () => {
        dispatch({ store: 'page', type: 'change', payload: { page: 'test' } })
    }

    return <HomeStyle.Wrapper data-testid={BASE_TEST_ID} >
        <HomeStyle.Title data-testid={BASE_TEST_ID + '-title'} >{ lang.title }</HomeStyle.Title>
        <HomeStyle.SubTitle data-testid={BASE_TEST_ID + '-subtitle'} >{lang.subtitle}</HomeStyle.SubTitle>
        <HomeStyle.Button data-testid={BASE_TEST_ID + '-btn-next'}
            onClick={goToNextPage} >{ lang.btnNext }</HomeStyle.Button>
    </HomeStyle.Wrapper>
}
