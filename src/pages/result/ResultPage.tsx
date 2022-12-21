import { IcoPrev } from "assets/icons/IcoPrev";
import { IcoRestart } from "assets/icons/IcoRestart";
import { Question as QuestionEle } from "components/question/Question";
import { useAppState } from "hooks/useAppState";
import { useLanguage } from "hooks/useLanguage";
import { Question } from "models/types";
import { useState } from "react";
import * as ResultEle from './Results.style'
import { ResultPageProps } from "./types";

const BASE_TEST_ID = 'result-page';

export const ResultPage = ({ questions }: ResultPageProps) => {

    const [showResults, setShowResults] = useState(false);
    const { dispatch, state } = useAppState();
    
    const {result: lang} = useLanguage();

    const restartTest = () => {
        dispatch({ store: 'question', type: 'reset' })
        dispatch({ store: 'page', type: 'change', payload: {page: 'home'} })
    }

    const toggleShowResults = () => {
        setShowResults(val => !val)
    }

    let result = 0;

    let availableQuestions: Question[] = [];

    if (state) {
        availableQuestions = state.questions.data;
    } else if (questions) {
        availableQuestions = questions;
    }
    
    availableQuestions.forEach((question) => {
        const { selectedAnswer } = question;
        const value = question.answers.find((answer) => answer.id === selectedAnswer);
        if (!value) {
            return 0;
        }
        result += value.value;
    })

    const introvert = result < 0;


    return <ResultEle.Wrapper>
        <div data-testid={BASE_TEST_ID} >
            <ResultEle.InfoWrapper >
                <ResultEle.Title >{introvert ? lang.introvet : lang.extrovert}</ResultEle.Title>
                <ResultEle.Meaning >{introvert ? lang.introMeaning : lang.extroMeaning}</ResultEle.Meaning>
                <ResultEle.BtnWrap >
                    <ResultEle.BtnRestart disabled={false} data-testid={BASE_TEST_ID + '-btn-restart'} onClick={ restartTest } >
                        <ResultEle.BtnIco >
                            <IcoRestart />
                        </ResultEle.BtnIco>
                        <ResultEle.BtnLabel >{ lang.btnRetake }</ResultEle.BtnLabel>
                    </ResultEle.BtnRestart>
                    <ResultEle.BtnShow disabled={false} active={showResults} data-testid={BASE_TEST_ID + '-btn-toggle-show'}
                        onClick={toggleShowResults} 
                        >
                        <ResultEle.BtnLabel >{showResults ? lang.btnHideAnswer : lang.btnShowAnswer}</ResultEle.BtnLabel>
                        <ResultEle.BtnIco >
                            <IcoPrev />
                        </ResultEle.BtnIco>
                    </ResultEle.BtnShow>
                </ResultEle.BtnWrap>
            </ResultEle.InfoWrapper>
        </div>
        {showResults && <Results questions={state ? state.questions.data : []} />}
    </ResultEle.Wrapper>
}

export const Results = ({questions}: {questions: Question[]}) => {
    return <ul data-testid={ BASE_TEST_ID + '-details' } >
        { questions && questions.map((question: Question) => {
            return <ResultEle.QeuestionWrap key={question.id} >
                {<QuestionEle question={question} readonly />}
            </ResultEle.QeuestionWrap>
        })}
    </ul>
}