import { styled } from "styled-components"

const AsideItemStyled = styled.li`
width: 100%;
display: flex;
align-items: center;
gap: 1rem;
font-size: 22px;
cursor: pointer;
font-family: 'Inter', Arial, Helvetica, sans-serif;
margin: 1rem 0;
a{
    text-decoration: none;
    color: ${props => props.$ativo ? '#7B78E5' : '#FFF'};
    font-weight: ${props => props.$ativo ? 'bold' : 'regular'};
}
`

function AsideItem({ children, ativo = false, activeIcon, inactiveIcon }) {

    return (
        <AsideItemStyled $ativo={ativo}>
            <img src={ativo ? activeIcon : inactiveIcon} alt="Icone do item da lista" />
            {children}
        </AsideItemStyled>
    )
}
export { AsideItem }