import styled from "styled-components"

export const HomePage = styled.div`
    box-sizing: border-box ;
    display: flex ;
    text-align: center ;
    margin: 0 ;
    height: 100vh ;
    background-color: #17b0ec ;
        
    .sidebar{
        flex:1 ;
        background-color: blue ;

    }
    .main{
        flex: 6 ;
        background-color: white ;
    }
   
`
export const Aviso = styled.div`
            height: 100vh ;
            width: 100vw ;
            position: absolute ;
            background: linear-gradient(0deg, hsla(214, 78%, 52%, 1) 0%, hsla(197, 85%, 51%, 1) 54%);
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
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
