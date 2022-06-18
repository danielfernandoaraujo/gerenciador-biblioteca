import styled, { css } from "styled-components"

export const ActionsStyled = styled.div`
    display: flex ;
    justify-content: space-between ;
    align-items: center ;
    max-height: 15vh;
    width: 18vw ;
    max-width: 22vw ;
    background-color: white ;
    margin: 1em ;
    border-radius: 8px ;
    box-shadow: 0px 5px 5px 1px rgba(0,0,0,0.1);
    animation: flipInX;
    animation-duration: 0.7s;
    .left{
        display: flex ;
        align-items: center ;
        text-align: left ;
        flex: 3 ;
        margin: 10px ;
        font-weight: bold ;
        font-size: 20px;
        color:${props => props.color};
    }
    .right{
        display: flex ;
        align-items: center ;
        flex: 1 ;
        img{
            width: 8vw ;
            height: 8vh ;
        }
    }
`