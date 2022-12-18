import { Question } from "components/question/Question";
import { useAppState } from "hooks/useAppState";
import { useLanguage } from "hooks/useLanguage";
import { useState } from "react";
import { TestCompProps } from "./types";
import * as TestEle from './TestPage.style'
import { IcoPrev } from "assets/icons/IcoPrev";

const BASE_TEST_ID = 'test-page';

export const TestPage = () => {
    const { state } = useAppState();
    
    return <TestComp questions={state.questions.data} />
    
}

export const TestComp = ({questions}: TestCompProps) => {
    const { dispatch } = useAppState();
    const { test } = useLanguage();
    const [index, setIndex] = useState(0);
    
    const { length } = questions || { length: 0};


   const next = () => {
    if (index < length - 1) {
        setIndex(index => ++index);
        return;
    }

    dispatch && dispatch({
        store: 'page',
        type: 'change',
        payload: {
            page: 'result'
        }
    })

   }

   const prev = () => {
    if (index < length) {
        setIndex(index => --index);
        return;
    }
   }

   const nextDisabled = !(!questions || !questions[index] || questions[index].selectedAnswer)

    return <TestEle.Wrapper data-testid={BASE_TEST_ID} >
        <TestEle.Title>question {index + 1} of { length }</TestEle.Title> 
        <div >
            { questions && questions[index] && <Question question={questions[index]} /> }
        </div>
        <TestEle.BtnWrap >
            <TestEle.BtnPrev data-testid={BASE_TEST_ID + '-btn-prev'}
                onClick={prev}
                disabled={ index === 0 } >
                    <TestEle.BtnIco >
                        <IcoPrev />
                    </TestEle.BtnIco>
                    <TestEle.BtnLabel >{ test.btnPrev }</TestEle.BtnLabel>
            </TestEle.BtnPrev>
            <TestEle.BtnNext data-testid={BASE_TEST_ID + '-btn-next'}
                onClick={next}
                disabled={nextDisabled} >
                    <TestEle.BtnLabel >{ test.btnNext }</TestEle.BtnLabel>
                    <TestEle.BtnIco >
                        <IcoPrev />
                    </TestEle.BtnIco>
            </TestEle.BtnNext>
        </TestEle.BtnWrap>
    </TestEle.Wrapper>
}