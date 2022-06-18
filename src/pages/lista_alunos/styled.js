import styled from "styled-components"

export const AlunosStyled = styled.div`
    box-sizing: border-box ;
    display: flex ;
    text-align: center ;
    margin: 0 ;
    height: 100vh ;
    background-color: #17b0ec ;
    .main{
        flex: 6 ;
        flex-direction: column ;
        align-items: center ;
        background-color: white ;
        display: flex ;
        @media(max-width: 1024px) {
                    display: none ;
                    
                    
        }
    }
    
   
`