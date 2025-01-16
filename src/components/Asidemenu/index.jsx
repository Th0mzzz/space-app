import styled from "styled-components"
import { AsideItem } from "./Asideitem"

const AsideStyled = styled.aside` 
ul{
    width: 420px;
    max-width: fit-content;
    list-style: none;
    padding: 0;
    margin: 0;
}
`

export const AsideMenu = () => {
    return (
        <AsideStyled>
            <nav>
                <ul>
                    <AsideItem ativo={true} activeIcon='./imagens/icones/home-ativo.png' inactiveIcon='./imagens/icones/home-inativo.png' >
                    <a href="">Inicio</a>
                    </AsideItem>
                    <AsideItem ativo={false} activeIcon='./imagens/icones/mais-curtidas-ativo.png' inactiveIcon='./imagens/icones/mais-curtidas-inativo.png' >
                    <a href="">Mais Curtidas</a>
                    </AsideItem>
                    <AsideItem ativo={false} activeIcon='./imagens/icones/mais-vistas-ativo.png' inactiveIcon='./imagens/icones/mais-vistas-inativo.png' >
                    <a href="">Mais Vistos</a>
                    </AsideItem>
                    <AsideItem ativo={false} activeIcon='./imagens/icones/novas-ativo.png' inactiveIcon='./imagens/icones/novas-inativo.png' >
                    <a href="">Novas</a>
                    </AsideItem>
                    <AsideItem ativo={false} activeIcon='./imagens/icones/surpreenda-me-ativo.png' inactiveIcon='./imagens/icones/surpreenda-me-inativo.png' >
                    <a href="">Surpreenda-me</a>
                    </AsideItem>
                </ul>
            </nav>
        </AsideStyled>
    )
}