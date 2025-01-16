import styled from "styled-components"
import { Input } from "../Input"
import { useState } from "react"

const HeaderStyled = styled.header`
    width: 100%;
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img.logo{
        max-width: 212px;
    }
`

const Header = (props) => {

    return (
        <>
            <HeaderStyled>
                <img className='logo' src="/imagens/logo.png" />
                <Input type={'text'} value={props.search} setState={props.setSearch} changeInput={props.changeInput} placeholder='O que você procura?' className='search-input'>
                    <button className="search-btn"><img className="icon" src="/imagens/icones/search.png" /></button>
                </Input>
            </HeaderStyled>
        </>
    )
}

export default Header