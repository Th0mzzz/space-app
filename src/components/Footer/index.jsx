import styled from "styled-components";

const FooterStyled = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 100%;
padding: 2rem 1.5rem; 
background: #04244F;
color: #fff;
    .redes{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    h3{
        font-family: 'Poppins', Arial;
        font-weight: 400;
    }
`

export const Footer = () => {
    return (
        <FooterStyled>
            <div className="redes">
                <a href="http://facebook.com.br" target="_blank" rel="noopener noreferrer">
                    <img src="./imagens/sociais/facebook.svg" alt="logo do facebook" />
                </a>
                <a href="http://instagram.com.br" target="_blank" rel="noopener noreferrer">
                    <img src="./imagens/sociais/instagram.svg" alt="logo do facebook" />
                </a>
                <a href="http://x.com" target="_blank" rel="noopener noreferrer">
                    <img src="./imagens/sociais/twitter.svg" alt="logo do facebook" />
                </a>
            </div>
            <h3>
                Desenvolvido por <strong>Th0mzzz</strong> no curso da <strong>Alura</strong>
            </h3>
        </FooterStyled>
    )
}