import styled from "styled-components";
import { Title } from "../Tittle";
import { Gallerytags } from "./Gallerytags";
import { GalleryCard } from "./Gallerycard";
import { SideCard } from "./Gallerysidecard";
const GalleryContainer = styled.section`
    display: flex;
    gap: 1.2rem;
    margin-bottom: 3rem;
`
const GalleryContent = styled.div`
    flex-grow: 1;
    .fotos-row{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
        gap: .7rem;
        row-gap: 1.5rem;
    }
`
const SideGallery = styled.div`
.fotos-row{
    display: flex;
justify-content: start;
flex-direction: column;
gap: 1rem;
}

`

export const GallerySection = ({ pictures, expandModal, changeFav, changePicsByTag }) => {
    return (
        <>
            <Gallerytags ativo={0} changePicsByTag={changePicsByTag} />
            <GalleryContainer>
                <GalleryContent>
                    <Title titleAlign='start' color={'#fff'} >Navegue pela galeria</Title>
                    <div className="fotos-row">
                        {pictures && pictures.map(pic => {
                            return <GalleryCard
                                key={pic.id}
                                cardInfo={pic}
                                expanded={false}
                                expandModal={expandModal}
                                changeFav={changeFav}
                            />
                        })}
                    </div>
                </GalleryContent>
                <SideGallery>
                    <Title titleAlign='center ' color={'#fff'} >Populares</Title>
                    <div className="fotos-row">
                        {
                            pictures && pictures.map(pic => {
                                return <SideCard key={pic.id} cardInfo={pic} />
                            })
                        }
                    </div>
                </SideGallery>
            </GalleryContainer>
        </>
    )
}
