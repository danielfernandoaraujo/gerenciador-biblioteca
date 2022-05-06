import styled from "styled-components"

export const HomePage = styled.div`
    box-sizing: border-box ;
    text-align: center ;
    margin: 0 ;
    height: 100vh ;
    background-color: black ;
    background: #17b0ec;
        .aviso{
            position: absolute;
            display: flex ;
            flex-direction: column ;
            align-items: center ;
            justify-content: space-around ;
            width: 90vw ;
            height: 60vh ;
            top: 10vh;
            left: 5vw;    
            background-color: white ;
            border-radius: 8px ;
                .title{
                    color: red;
                }
                .conteiner{
                    color:#333337;
                }
                .exit{
                    width: 50vw ;
                    height: 6vh ;
                    border-radius: 4px ;
                    border: none ;
                    color: white ;
                    background-color: red ;

                }
            @media(min-width: 768px) {
                display: none ;
                
    }
    }
   
`