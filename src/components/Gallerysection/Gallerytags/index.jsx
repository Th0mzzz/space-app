import styled from "styled-components"
import tags from '../../../json/tags.json'

const TagsStyled = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 1.6rem;
    margin: 1rem 0;
    .tags-title{
        font-family: 'Inter', Verdana, Geneva, Tahoma, sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: #fff;
    }
    .tags-row{
        display: flex;
        gap: .6rem;
        }
`
const Tag = styled.button`
    background:#d9d9d945;
    border: ${props => props.$ativo ? `2px solid #7B78E5` : `none`};
    outline: none;
    color: #fff;
    border-radius: 10px;
    padding: 0.8rem 1.8rem;
    cursor: pointer;
    transition: all .4s;
    &:hover{
        box-shadow: 0 0 8px #7B78E5 ;
    }
            
`
export const Gallerytags = (props) => {
    return (
        <TagsStyled>
            <h3 className="tags-title">Busque por tags:</h3>
            <div className="tags-row">
                {tags.map((tag, index) => <Tag
                    $ativo={props.ativo === index ? true : false}
                    key={tag.id}
                    onClick={() => { props.changePicsByTag(tag.id) }}
                >
                    {tag.titulo}
                </Tag>
                )}
            </div>
        </TagsStyled>
    )
}