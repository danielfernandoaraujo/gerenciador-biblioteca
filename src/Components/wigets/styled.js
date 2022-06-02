import styled from "styled-components"

export const WidgetStyled = styled.div`
    display: flex ;
    justify-content: space-between ;
    max-height: 20vh;
    width: 18vw ;
    max-width: 17vw ;

    margin: 1em ;
    border-radius: 8px ;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0,0,0,0.47); 
    box-shadow: 2px 4px 10px 1px rgba(201,201,201,0.47);
    animation: flipInX;
    animation-duration: 0.7s;
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
            border-bottom: 1px dashed gray;
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