import styled from "styled-components"
import GlobalStyles from "./components/styles"
import Header from "./components/Header"
import { AsideMenu } from "./components/Asidemenu"
import { Wrapper } from "./components/Wrapper"
import banner from './assets/banner.png'
import { GallerySection } from "./components/Gallerysection"
import { useEffect, useState } from "react"
import fotos from './json/fotos.json'
import { ModalCard } from "./components/Modal"
import { Footer } from "./components/Footer"
const Fundogradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-width: 100vw;
`

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const AppMain = styled.main`
display: flex;
gap: 2.5rem;
flex-flow: row nowrap;
`
const ContentContainer = styled.main`
display: flex;
flex-grow: 1;
flex-direction: column;
`

function App() {
  const changeInput = (newValue, setState) => {
    setState(newValue)
  }
  const [pics, setPics] = useState(fotos)
  const [expandedPic, setExpanded] = useState(null)
  const [search, setSearch] = useState('')

  const changeFav = (newFavId) => {
    if (newFavId === expandedPic?.id) {
      setExpanded({
        ...expandedPic,
        favorita: !expandedPic.favorita
      })
    }
    setPics(pics.map(pic => {
      return {
        ...pic,
        favorita: pic.id === newFavId ? !pic.favorita : pic.favorita
      }
    }))
  }

  const changePicsByTag = newTagId => {
    if (newTagId !== 0) {
      setPics(fotos.filter(pic => pic.tagId === newTagId))
    } else {
      setPics(fotos)
    }
  }

  useEffect(() => {
    console.log(pics)
  }, [pics])

  useEffect(() => {
    if (search.trim() === '') {
      setPics(fotos)
    } else {
      setPics(fotos.filter(pic =>
        pic.titulo.toLowerCase().includes(search.toLowerCase()) || pic.fonte.toLowerCase().includes(search.toLowerCase())
      ))

    }
  }, [search, fotos])


  return (
    <Fundogradiente>
      <GlobalStyles />
      <AppContainer>
        <Header search={search} setSearch={setSearch} changeInput={changeInput} />
        <AppMain>
          <AsideMenu />
          <ContentContainer>
            <Wrapper bgImage={banner} text='A galeria mais completa da galáxia' />
            <GallerySection pictures={pics} expandModal={pic => setExpanded(pic)} changeFav={changeFav} changePicsByTag={changePicsByTag} />
            <ModalCard cardInfo={expandedPic} expandModal={pic => setExpanded(pic)} changeFav={changeFav} />
          </ContentContainer>
        </AppMain>
        <Footer />
      </AppContainer>
    </Fundogradiente>
  )
}

export default App
