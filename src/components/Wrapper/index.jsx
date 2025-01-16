import styled from "styled-components";

const WrapperStyled = styled.section`
    background-image: ${props => `url(${props.$bgImage})`};
    width: 100%;
    height: fit-content;
    min-height:320px;
    background-size: cover;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: start;
    & .title{
        text-align:start;
        max-width:420px;
        font-size: 32px;
        font-weight: 400;
        font-family: 'Poppins', 'Times New Roman', Times, serif;
        padding: 2.7rem;
        color:#fff;
        text-shadow:0 0 5px #00000052;;
    }
`

export const Wrapper = (props) => {
    return (
        <WrapperStyled $bgImage={props.bgImage}>
            <h1 className="title">{props.text}</h1>
        </WrapperStyled>
    )
}