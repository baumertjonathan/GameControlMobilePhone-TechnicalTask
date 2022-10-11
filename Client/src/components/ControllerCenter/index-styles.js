import styled from "styled-components";

export const CenterWrapper = styled.div`
    width: 30%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
`

export const LogoText = styled.div`
    color: #54585a;
    font-style: italic;
    font-size: 30px
`

export const InvertedLogoText = styled.div`
    background-color: #54585a;
    color: #B2B4B2;
`

export const SlashButton = styled.div`
    height: 10px;
    width: 50px;
    background-color: black;
    transform: rotate(-35deg);
    margin-bottom: 15px;
    border-radius: 10px;
`

export const SlashButtonText = styled.div`
    color: #54585a;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 100px;
`

export const ButtonPairing = styled.button`
    display:flex;
    flex-direction: column;
    padding: 0;
    border: none;
    background: none;
    margin-bottom: 20px;
    align-content: center;
`