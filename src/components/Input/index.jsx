import styled from "styled-components"

const Inputcontainer = styled.div`
    height: fit-content;
    position: relative;
    z-index: 1;
    padding: 2px;
    overflow: hidden;   
    border-radius: 10px;
    display: flex;
    align-items: center;
    background: transparent;
    border: 2px solid #7B78E5;

    
 & > input {
    background: transparent;
    border-radius: 10px;
    width: 100%;
    height: fit-content;
    border: none;
    outline: none;
    color: white;
    padding:12px 16px ;
    &::placeholder{
        color: #7B78E5;
        opacity: 0.6;
    }
 }

& .search-btn{
    background: transparent;
    border: none;
    outline: none;
   & > .icon{
    width: 35px;
    height: 35px;
    cursor: pointer;
}
} 
`

export const Input = (props) => {
    return (
        <Inputcontainer className={props.className}>
            <input type={props.type} value={props.value} onChange={(e) => { props.changeInput(e.target.value, props.setState) }} placeholder={props.placeholder} />
            {props.children}
        </Inputcontainer>
    )
}
