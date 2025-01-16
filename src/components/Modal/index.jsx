import styled from "styled-components"
import { GalleryCard } from "../Gallerysection/Gallerycard"

const ModalStyled = styled.div`
    width: 100%;
    min-width: 100vw;
    height: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #000000a9;
    display: flex;
    z-index: 1000;
    
`
export const ModalCard = ({ cardInfo, expandModal, changeFav }) => {
    if (!!cardInfo) {
        return (
            <ModalStyled >
                <GalleryCard cardInfo={cardInfo} expanded={true} expandModal={expandModal} changeFav={changeFav}/>
            </ModalStyled>
        )
    }
    return null
}