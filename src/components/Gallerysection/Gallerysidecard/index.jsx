import styled from "styled-components"

const SideCardStyled = styled.div`
width: 100%;
border-radius: 20px;
overflow: hidden ;
img{
        display: block;
        z-index: 1;
        object-fit: cover;
        transition: transform .4s;
        cursor: pointer;
        &:hover{
            transform: scale(1.1);
        }
    }
`

export const SideCard = ({ cardInfo }) => {
    return (
        <SideCardStyled>
            <img src={cardInfo.path} alt={cardInfo.titulo} />
        </SideCardStyled>
    )
}