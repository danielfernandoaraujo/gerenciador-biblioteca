import styled from "styled-components"

export const HomeStyled = styled.div`
    display: flex ;
    text-align: center ;
    height: 100vh ;
    width: 100vw ;
    
        
    .main{
        flex: 6 ;
        background-color: white ;
        display: flex ;
        flex-direction: column ;
        
        .top{
            flex: 10 ;
            display: flex ;
            flex-direction: column ;
            .widget{
                flex: 3 ;
                justify-content: center ;
                display: flex ;
            
            }
        .bottom{
            flex: 7 ;
            display: flex;
            align-items: center ;
            flex-direction: column ;
            .title_actions{
                flex: .3 ;
                display: flex ;
                width: 94% ;
                justify-content:  left;
                align-items: center ;
                font-size: 20px;
                font-weight: bold;
                opacity: 0.8 ;
                color: #0c4acf;
            }
            .actions{
                flex:1;
                display: flex ;
                height: 100% ;
                width: 100% ;
                justify-content: center ;

            
            }
            .pendings{
                flex:1 ;
            }
        }
        }
    }
   
`
export const Aviso = styled.div`
            height: 100vh ;
            width: 100vw ;
            position: absolute ;
            background: hsla(221, 89%, 43%, 1);
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
