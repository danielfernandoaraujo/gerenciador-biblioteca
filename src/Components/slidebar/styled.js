import styled from "styled-components"

export const Main = styled.div`
    display: flex ;
    flex: 1 ;
    background-color: #0c4bce ;
    align-items: center ;
    justify-content: space-between ;
    flex-direction: column ;
        .logo{
                flex: 1 ;
                display: flex;
                align-items: center;
                justify-content: center;
                padding-bottom: 10px ;
                margin-left: 5px ;
                margin-right: 5px ;
                width: 100% ;
                

        //********LOGO DO ATHENEU**********//
                img{
                    width: 2.7em;
                    margin-right: 1rem;
                }
                h1{
                    font-size: 1.5em;
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
            
            .option{
                display: flex ;
                color: white ;
                font-weight: bold ;
                height: 8.5vh ;
                align-items: center ;
                padding-left: 10px ;
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
            margin-bottom: 4px ;
            width: 100% ;
            .logout-btn{
                color: #FFF ;
                border-radius: 25%;
                width: 5vw ;
                background-color: #093ca4 ;
                font-size: 18px ;
                display: flex ;
                font-weight: bold ;
                justify-content: center ;
                height: 10vh ;
                align-items: center ;
                :hover{
                    background-color: #ce0c4b;  
                    transition: .5s all ;
                }
            }

        }
`