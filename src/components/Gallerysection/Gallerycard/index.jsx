import styled from "styled-components";

const CardStyled = styled.figure`
    position: relative;
    width: 100%;
    max-width:  ${props => props.$expanded ? `992px` : `48%`};
    margin: ${props => props.$expanded ? `auto` : `0`};
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    button.close{
        width: fit-content;
        height: fit-content;
        background: transparent;
        border: none;
        cursor: pointer;
        position: absolute;
        top: 0;
        right:0;
        margin: 1.8rem;
        z-index:20;
    }
    
    img.foto{
        display: block;
        z-index: 1;
        width:100%;
        height:  ${props => props.$expanded ? `500px` : `256px`};
        object-fit: cover;
        transition: transform .4s;
        cursor: pointer;
        &:hover{
            transform: scale(1.1);
        }
    }
    figcaption{
        color: #fff;
        background: #001634;
        z-index: 10;
        padding: 1.5rem 1rem;
        h3, p{
            margin: 0;
        }
        footer{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }

        .card-btns{
            display: flex;
            align-items: center;
            gap: .5rem;
            img{
                cursor:pointer;
            }
        }

    }
`

export const GalleryCard = ({ cardInfo, expanded, expandModal, changeFav }) => {
    return (
        <CardStyled $expanded={expanded} >
            {
                expanded ? <button className="close" onClick={e => { expandModal(null) }}><img src="./imagens/icones/fechar.png" alt="botão de fechar" /></button> : null
            }
            <img className='foto' src={cardInfo.path} alt={cardInfo.titulo} />
            <figcaption>
                <h3>{cardInfo.titulo}</h3>
                <footer>
                    <p>{cardInfo.fonte}</p>
                    <div className="card-btns">
                        <img src={cardInfo.favorita ? '/imagens/icones/favorito-ativo.png' : '/imagens/icones/favorito.png'} onClick={() => { changeFav(cardInfo.id) }} />
                        {
                            expanded ? null : <img src="/imagens/icones/expandir.png" onClick={e => expandModal(cardInfo)} />
                        }

                    </div>
                </footer>
            </figcaption>
        </CardStyled>
    )
}