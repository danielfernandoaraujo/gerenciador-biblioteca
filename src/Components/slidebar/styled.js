import styled from "styled-components"

export const Main = styled.div`
    display: flex ;
    background-color: #2154be ;
    align-items: center ;
    justify-content: space-between ;
    flex-direction: column ;
        .logo{
                flex: 0.8 ;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 5px ;
                /* margin-left: 5px ;
                margin-right: 5px ; */
                width: 100% ;
                

        //********LOGO DO ATHENEU**********//
                img{
                    width: 2.7em;
                    margin-right: 0.5rem;
                }
                h1{
                    font-size: 1.4em;
                    color: white;
                    span{
                        color: #F7B731;
                    }
                }
            }
        .options{
            flex: 5 ;
            display: flex ;
            flex-direction: column ;
            width: 100% ;
            margin-left: 8px ;
            margin-top: 10px ;
            margin-bottom: 10px ;
            .option{
                display: flex ;
                color: white ;
                font-weight: bold ;
                height: 8.5vh ;
                align-items: center ;
                padding-left: 10px ; 
                margin-top: 5px;
                margin-bottom: 8px ;
                border-radius: 15px 0 0px 15px ;
                p{
                    font-size: 18px ;
                    margin-left: 7px ;
                }
                :hover{
                    background-color:  #093ca6 ;
                    transition: .5s all ;
                }
            }
            #home{
                background-color:  #ce0c4b ;
            }
            #alunos{
                background-color:  #ce0c4b ;
            }
            #livros{
                background-color:  #ce0c4b ;
            }
            #emprestimos{
                background-color:  #ce0c4b ;
            }
        }
        .logout{
            flex: 0.5;
            display: flex ;
            flex-direction: column ;
            align-items: center ;
            //border-top: 2px solid #093ca4;
            
            margin-left: 12px ;
            margin-bottom: 20px ; 
            width: 100% ;
            .logout-btn{
                color: #FFF ;
                border-radius: 15px 0 0 15px;
                width: 100% ;
                //background-color: #093ca4 ;
                padding-left: 10px ;
                margin-left: 18px ;
                font-size: 18px ;
                display: flex ;
                font-weight: bold ;
                //justify-content: center ;
                height: 8.5vh ;
                align-items: center ;
                cursor: pointer ;
                p{
                    font-size: 18px ;
                    margin-left: 6px ;
                }
                :hover{
                    background-color:  #093ca6;  
                    transition: .5s all ;
                }
            }

        }
`

export const ModalDesconectarStyled = styled.div`
            height: 100vh ;
            width: 185.4vw ;
            position: absolute ;
            //background: hsla(221, 89%, 43%, 1);
            //box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 3px );
            background-color: rgba(17,17,17,0.4) ;
            
            .main{
                position: absolute;
                display: flex ;
                flex-direction: column ;
                align-items: center ;
                justify-content: space-between ;
                width: 35vw ;
                height: 35vh ;
                top: 26vh;
                right: 32vw;     
                background-color: white ;
                box-shadow: 0px 8px 20px 2px rgba(0,0,0,0.57);
                box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
                border-radius: 8px ;
                    .title{
                        margin: 45px 15px ;
                        font-size: 20px ;
                        color:#245dd2;
                    }
                    
                    .conteiner{
                        color:#333337;
                        margin: 0px 10px ;
                    }
                    .escolha{
                        display: flex ;
                        justify-content: space-around ;
                        width: 100% ;
                        margin-bottom: 20px ;
                        .exit{
                        width: 15vw ;
                        height: 7vh ;
                        font-size: 20px ;
                        border-radius: 4px ;
                        font-weight: bold ;
                        border: none ;
                        color: white ;
                        background-color: #ce0c4b ;
                        cursor: pointer;
                            :hover{
                                background-color: #f2135b ;
                                transition: .7s all;
                            }
                        }
                        .skip{
                            background-color: #245dd2;
                            :hover{
                                background-color: #396dd6;
                                transition: .7s all;
                            }
                            }
                    }
                    
               
        }
`