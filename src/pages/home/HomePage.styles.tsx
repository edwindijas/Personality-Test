import styled from "styled-components"

const Wrapper = styled.div`
    background-color: #fff;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 45em;
    padding: 2em;
    border-radius: 1em;
    min-height: 25em;
    text-align: center;
    box-shadow: 10px 10px 10px -5px #e8e6ec;
`

const Button = styled.button`
    color: #fff;
    width: 100%;
    border-radius: 0.5em;
    font-size: 1.6em;
    height: 2.5em;
    font-weight: 200;
    max-width: 13em;
    text-transform: uppercase;
    background-color: #7432ea;
    background: linear-gradient(164deg, #3f51b5, #673ab7);
`

const Title = styled.h1`
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

const SubTitle = styled.p`
    margin: 1em 0;
    font-size: 1.3em;
    color: #6c6a8c;
    &::first-letter {
        font-size: 1.7em;
        text-transform: capitalize;
    }

`

export const HomeStyle = {
    Wrapper,
    Button,
    Title,
    SubTitle
}