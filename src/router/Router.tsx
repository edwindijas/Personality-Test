import { useAppState } from "hooks/useAppState"
import { HomePage } from "pages/home/HomePage";
import { ResultPage } from "pages/result/ResultPage";
import { TestPage } from "pages/test/TestPage";
import { Page } from "pages/types";

const Pages: { [key in Page]: () => JSX.Element } = {
    home: HomePage,
    test: TestPage,
    result: ResultPage
}


export const Router = () => {
    const { state } = useAppState();
    const Page = Pages[state.page];
    return <div >
        <Page />
    </div>
}