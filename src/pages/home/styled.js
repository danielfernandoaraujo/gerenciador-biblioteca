import styled from "styled-components"

export const HomeStyled = styled.div`
    display: flex ;
    text-align: center ;
    height: 100vh ;
    width: 100vw ;
    
    .avisoTela{
        display: flex ;
        align-items: center ;
        justify-content: center ;
        flex-direction: column ;
        width: 100% ;
        height: 100% ;
        background: linear-gradient(
            180deg,
            hsla(221, 89%, 43%, 1) 0%,
            hsla(204, 98%, 46%, 1) 100%
        );
        p{
            color: white ;
            font-size: 15px ;
            margin-bottom: 10px ;
        }
        img{
            width: 250px ;
            border-radius: 10px ;
        }
        @media(min-width: 1024px) {
                    display: none ;
                    
                    
        }
    }
        
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
        @media(max-width: 1024px) {
                    display: none ;
                    
                    
        }
    }
    
   
`