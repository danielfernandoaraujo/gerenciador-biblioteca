import styled from "styled-components"

export const LoginPage = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: center ;
    margin: 0 ;
    width: 100vw ;
    height: 100vh ;
    background: linear-gradient(0deg, hsla(214, 78%, 52%, 1) 
    0%, hsla(197, 85%, 51%, 1) 54%);
    .conteiner{
        display: flex ;
        flex-direction: column ;
        height: 69.2vh ;
        width: 30vw ;

        .logo{
            flex: 1 ;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 10px ;

    //********LOGO DO ATHENEU**********//
            img{
                width: 3.5em;
                margin-right: 1rem;
            }
            h1{
                font-size: 2em;
                color: white;
                span{
                    color: #F7B731;
                }
            }
        }
        .box-input{
            flex: 4 ;
            display: flex ;
            align-items: center ;
            justify-content: center ;
            flex-direction: column ;
            border-radius: 8px ;
            background-color: white ;
            box-shadow: 0px 8px 20px 2px rgba(0,0,0,0.57);
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 20px );
            border: 1px solid rgba( 255, 255, 255, 0.18 );
            padding: 0px 50px ;
            .title{
                display: flex ;
                justify-content: center ;
                align-items: center ;
                flex: 2 ;;
                text-align: center ;
                color:#149ed4;
                font-size: 2rem ;
                @media(max-width: 900px) {
                    font-size: 1.8rem ;
  }
                @media(max-width: 500px) {
                    font-size: 1.7rem ;
}
            }
            .inputs{
                display: flex ;
                flex-wrap: wrap;
                justify-content: center;
                align-items: flex-end;
                flex: 3 ;
                width: 100% ;
            }
            .input{
                display: flex ;
                flex-direction: column ;
                align-items: left ;
                justify-content: center ;
                width: 100% ;
                margin-bottom: 10px ;
                label{
                    color:#41414b;
                }
                input{
                    /* padding-left: 5px ; */
                    margin-right: 10px ;
                    border: none ;
                    border-bottom: 2px solid #cbcbd2 ;
                    background-color:none;
                    text-align: left;
                    width: 97%;
                    height: 4vh;
                    ::placeholder{
                        
                    }
                    &:focus{
                        outline: 0;
                        border: none ;
                        border-bottom: 2px solid #149ed4;
                        //box-shadow: 0px 0px 0px 3px  #a4e0f7;
                        background-color: white;
                        transition: .7s;
                    }
                }
            }
            .button{
                flex: 2 ;
                display: flex ;
                align-items: center ;
                flex-direction: column ;
                justify-content: center ;
                width: 100% ;
                    button{
                    width: 100%;
                    height: 6.5vh;
                    background-color: #17b0ec;
                    border-radius: 4px;
                    border:none;
                    font-size: 1.2rem;
                    color: white;
                    cursor: pointer;
                    
                    &:hover{
                        background-color: #149ed4;
                        transition: .7s all;
                    }
                }
                    .msg-error{
                        height: 12px ;
                        p{
                            font-size: 12px ;
                            margin-top: 7px ;
                            margin-bottom: 5px ;
                            color:red;
                            box-shadow: 0px 1px red;
                        }
                        
                    }
            }
        }

        @media(max-width: 900px) {
        width: 40vw ;
  }
        @media(max-width: 750px) {
        width: 55vw ;
  }
        @media(max-width: 425px) {
        width: 75vw ;
  }
    }
`