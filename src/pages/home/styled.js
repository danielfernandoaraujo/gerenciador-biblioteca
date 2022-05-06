import styled from "styled-components"

export const HomePage = styled.div`
    box-sizing: border-box ;
    text-align: center ;
    margin: 0 ;
    height: 100vh ;
    background-color: black ;
    background: #2193b0;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #6dd5ed, #2193b0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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