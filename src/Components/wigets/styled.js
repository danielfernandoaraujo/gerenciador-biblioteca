import styled from "styled-components"

export const WidgetStyled = styled.div`
    display: flex ;
    justify-content: space-between ;
    max-height: 20vh;
    -width: 20vw ;
    
    margin: 1em ;
    border-radius: 8px ;
    -webkit-box-shadow: 0px 10px 20px 1px rgba(79,79,79,0.15); 
    box-shadow: 0px 10px 20px 1px rgba(79,79,79,0.15);
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
            display: flex ;
            align-items: center ;
            justify-content: center ;
            width: 2.3vw ;
            height: 4vh ;
            border-radius: 4px ;
            background-color: gray ;
        }
    }
`