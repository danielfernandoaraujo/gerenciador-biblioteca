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
        background-color: white ;
        display: flex ;
        flex-direction: column ;
        .content{
            flex: 10 ;
        }
    }
   
`
export const Aviso = styled.div`
            height: 100vh ;
            width: 100vw ;
            position: absolute ;
            background: hsla(221, 89%, 43%, 1);
            backdrop-filter: blur( 2px );
            
            .main{
                position: absolute;
                display: flex ;
                flex-direction: column ;
                align-items: center ;
                justify-content: space-around ;
                width: 90vw ;
                height: 60vh ;
                top: 20vh;
                left: 5vw;    
                background-color: white ;
                border-radius: 8px ;
                    .title{
                        color: red;
                        font-size: 20px ;
                    }
                    .conteiner{
                        color:#333337;
                        margin: 0px 10px ;
                    }
                    .exit{
                        width: 55vw ;
                        height: 7vh ;
                        font-size: 20px ;
                        border-radius: 4px ;
                        font-weight: bold ;
                        border: none ;
                        color: white ;
                        background-color: red ;
                    }
               
        }
        @media(min-width: 768px) {
                    display: none ;
                    
        }
`
