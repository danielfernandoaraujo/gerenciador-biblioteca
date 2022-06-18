import styled from "styled-components"

export const LivrosStyled = styled.div`
    box-sizing: border-box ;
    display: flex ;
    text-align: center ;
    margin: 0 ;
    height: 100vh ;
    background-color: #17b0ec ;
    
    .main{
        flex: 6 ;
        background-color: white ;
        display: flex ;
        flex-direction: column ;
        .content{
            flex: 10 ;
        }
        @media(max-width: 1024px) {
                    display: none ;
                    
                    
        }
    }
   
`