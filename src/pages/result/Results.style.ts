import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
`

export const InfoWrapper = styled.div`
    background-color: #fff;
    padding: 3em;
    border-radius: 1em;
    max-width: 46em;
    width: 95%;
    margin: 0 auto;
    @media all and (max-width: 40em) {
        padding: 1.5em;
    }
   
`

export const QeuestionWrap = styled(InfoWrapper)`
    margin-top: 1em;
`

export const  BtnRestart = styled.button`
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

    @media all and (max-width: 35em) {
        margin-right: 0;
        margin-bottom: 0.5em;
        width: 100%;
    }

    ${({disabled}: {disabled: boolean}) => `
        opacity: ${ disabled ? 0.4 : 1 };
        cursor: ${ disabled ? 'normal' : 'pointer' };
    `}
    
`

export const BtnShow = styled(BtnRestart)`
    ${ ({active}: {active: boolean}) => `
        
        svg {
            transition: transform 1s;
            transform: rotate(${active ? 90 : 270}deg);
            fill: #fff;
            padding: 0.2em;
        }
    `}
   

    color: #fff;
    margin-right: 0;
    background-color: #1E1E1E;
    @media all and (max-width: 35em) {
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
    border-top: 1px solid #ddd;
    padding-top: 1.5em;
`

export const BtnIco = styled.figure`
   width: 1.5em;
   height: 1.5em;
`

export const Title = styled.h1`
    font-size: 3em;
    font-weight: 800;
    line-height: 1.2;

      
    @keyframes gradient-animation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    background: linear-gradient(229deg,#e59ca9,#4259f6,#c6027d,#d14505);
    background-size: 240% 240%;
    animation: gradient-animation 10s ease infinite;
    -webkit-background-clip: text;
    color: transparent;

`

export const Meaning = styled.p`
    font-size: 1.2em;
    line-height: 1.2;
    margin: 1em 0;
    color: #444;
`