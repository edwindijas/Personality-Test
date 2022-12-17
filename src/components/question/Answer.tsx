import { IcoTick } from "assets/icons/IcoTick";
import  * as AnswerEle from "./Answer.style";
import { AnswerProps } from "./types"

const BASE_TEST_ID = 'answer'

export const Answer = ({ answer, index, currentAnswer, selectAns }: AnswerProps) => {
    const active = currentAnswer === answer.id;
    
    return <AnswerEle.Wrapper active={active} data-testid={BASE_TEST_ID} onClick={() => selectAns(answer.id)} >
        <AnswerEle.AnsWrap >
            <AnswerEle.Index active={active} data-testid={BASE_TEST_ID + '-index'} >{ String.fromCharCode(65 + index) }</AnswerEle.Index>
            <AnswerEle.Label data-testid={BASE_TEST_ID + '-label'} >{ answer.label }</AnswerEle.Label>
        </AnswerEle.AnsWrap>
        { active && <AnswerEle.Tick data-testid={BASE_TEST_ID + '-icon'} >
            <IcoTick />
        </AnswerEle.Tick> }
    </AnswerEle.Wrapper>
}