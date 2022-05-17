import styled from 'styled-components'

export const ModalUserStyle = styled.div`
            height: 100vh ;
            width: 100% ;
            position: absolute ;
            //box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter: blur( 2px );
            background-color: rgba(17,17,17,0.4) ;
            
            .main{
                position: absolute;
                display: flex ;
                flex-direction: column ;
                align-items: center ;
                justify-content: space-between ;
                width: 35vw ;
                height: 35vh ;
                top: 50%;
                right: 50%;    
                background-color: white ;
                box-shadow: 0px 8px 20px 2px rgba(0,0,0,0.57);
                box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
                border-radius: 8px ;
                   
                    .title{
                        display: flex ;
                        align-items: center ;
                        justify-content: center ;
                        color: #2154bf;
                        font-size: 27px ;
                        flex: 1.5 ;
                    }
                    .input{
                        display: flex ;
                        align-self: center ;
                        justify-content: center ;
                        flex-direction:column ;
                        width: 80% ;
                        flex: 2;
                        input{
                            /* padding-left: 5px ; */
                            margin-right: 10px ;
                            border: none ;
                            border-bottom: 2px solid #cbcbd2 ;
                            background-color:none;
                            text-align: left;
                            width: 100%;
                            height: 4vh;
                            ::placeholder{
                                font-size: 18px ;
                            }
                            &:focus{
                                outline: 0;
                                border: none ;
                                border-bottom: 2px solid #149ed4;
                                //box-shadow: 0px 0px 0px 3px  #a4e0f7;
                                background-color: white;
                                transition: .7s;
                                ::placeholder{
                                    color: white ;
                                    transition: .9s ;
                                }
                            }
                        }
                    }
                        .escolha{
                            display: flex ;
                            align-items: center ;
                            justify-content: space-around ;
                            width: 100% ;
                            height: 20vh ;
                            flex: 1.5 ;
                            //margin-bottom: 20px ;
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