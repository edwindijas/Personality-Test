import styled from "styled-components"

export const Wrapper = styled.div`
    cursor: pointer;
    padding: 0.5em;
    margin-bottom: 0.5em;
    border-radius: 0.5em;
    display: flex;
    align-items: center;

    ${({active}: {active: boolean}) => `
        font-weight: ${ active ? '600' : 'normal' };;
        color: #${ active ? '000' : '625D4B' };
        background-color: #${ active ? 'F0AD12' : 'FDFCFA' };
        border: 1px solid #${ active ? 'CE9728' : 'D5CDBE' };
    `}

    
`

export const AnsWrap = styled.p`
    width: calc(100% - 1.5em);
`

export const Tick = styled.figure`
    width: 1.5em;
    height: 1.5em;
    fill: #403010;
    padding: 0.25em;
`

export const Label = styled.span`
    display: inline-block;
    width: calc(100% - 2.5em);
    padding: 0 0.75em;
`

export const Index = styled.span`
    display: inline-block;
    border: 1px solid #D5CDBE;
    font-weight: bold;
    border-radius: 0.25em;
    width: 2.3em;
    height: 2.3em;
    text-align: center;
    line-height: 2.3em;
    ${({active}: {active: boolean}) => `
        color: #${ active ? '7A5B1E' : '8E876E' };
        background-color: #${ active ? 'fff' : 'FDFCFA' };
    `}
`