import styled from "styled-components";

const TitleStyled = styled.h2`
    font-size: 32px;
    font-family: 'Poppins', 'Times New Roman', Times, serif;
    font-weight: 700;
    text-align: ${props=> props.$titleAlign};
    color: ${props=> props.$color};
`

export const Title = ({children, titleAlign, color = '#fff'}) =>{
    return(
        <TitleStyled $titleAlign={titleAlign} $color={color} >
            {children}
        </TitleStyled>
    )
}