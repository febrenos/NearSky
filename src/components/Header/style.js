import styled from "styled-components"

export const Menu = styled.div`
    width:100%;
    padding: 20px 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // background-color: var(--bg-secondary);
    border-radius:20px;
    @media(width < 768px){
        justify-content:center;
        gap:20px;
        flex-direction:column;
    }
    margin-bottom:50px;
`

export const Logo = styled.img`
    width: 143px;
    height: 100%;
    border-radius:10px;
`

export const Access = styled.div`
    display: flex;
`
export const Links = styled.div`
    width:40%;
    display:flex;
    justify-content:flex-end;
    gap:10%;
    @media(width < 768px){
        width:100%;
        justify-content:center;
    }
    & > *{
        cursor:pointer;
        &:hover{
            color:var(--txt-title);
        }
    }
    
`


