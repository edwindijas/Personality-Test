import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #fff;
    padding: 3em;
    border-radius: 1em;
    max-width: 46em;
    width: 95%;
    @media all and (max-width: 40em) {
        padding: 1.5em;
    }
`

export const  BtnPrev = styled.button`
    display: flex;
    flex-direction: row;
    margin-right: 1em;
    align-items: center;
    border-radius: 0.5em;
    padding: 1em;
    height: 3.5em;
    background-color: #F2EFE8;
    color: #1E1E1E;
    border: 1px solid #DED9CC;

    justify-content: center;

    @media all and (max-width: 25em) {
        margin-right: 0;
        margin-bottom: 0.5em;
        width: 100%;
    }

    ${({disabled}: {disabled: boolean}) => `
        opacity: ${ disabled ? 0.4 : 1 };
        cursor: ${ disabled ? 'normal' : 'pointer' };
    `}
    
`

export const BtnNext = styled(BtnPrev)`
    svg {
        transform: rotate(180deg);
        fill: #fff;
    }

    color: #fff;
    margin-right: 0;
    background-color: #1E1E1E;
    @media all and (max-width: 40em) {
        margin-bottom: 0;
        width: 100%;
    }
    
`

export const BtnLabel = styled.span`
    padding: 0 1em;
    height: 1em;
    font-weight: bold;
`

export const BtnWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 1.5em auto 0;
    flex-wrap: wrap;
`

export const BtnIco = styled.figure`
   width: 1em;
   height: 1em;
`

export const Title = styled.h1`
    font-weight: bold;
    &:first-letter {
        text-transform: capitalize;
    }
`

export const Label = styled.p`
    font-weight: bold;
    &:first-letter {
        text-transform: capitalize;
    }
`