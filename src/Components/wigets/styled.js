import styled from "styled-components"

export const WidgetStyled = styled.div`
    display: flex ;
    justify-content: space-between ;
    max-height: 20vh;
    width: 18vw ;
    background-color: white ;
    margin: 1em ;
    border-radius: 8px ;
    border: 1px solid #e5e5e5 ;
    box-shadow: 0px 5px 5px 1px rgba(0,0,0,0.1);
    animation: flipInX;
    animation-duration: .4s;
    .left{
        display: flex ;
        flex-direction: column ;
        justify-content: space-between ;
        padding: 10px ;
        width: 50% ;
        .title{
            display: flex ;
            color: #8f8f8f ;
            font-size: bold ;
            font-family: 'Ubuntu', sans-serif !important;
        }
        .number{
            display: flex ;
            font-size: 30px ;
        }
        .link{
            display: flex ;
            width: max-content ;
            font-size: 14px ;
            color: #2154bf ;
        }
    }
    .right{
        display: flex ;
        flex-direction: column ;
        justify-content: flex-end ;
        padding: 10px ;
        .icon{
            padding: 5px ;
            border-radius: 5px ;
            background-color: gray ;
            align-self: flex-end;
        }
    }
`