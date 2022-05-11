import styled from "styled-components"

export const Main = styled.div`
    flex: 1 ;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 10px ;

    //********LOGO DO ATHENEU**********//
            img{
                width: ${(props) => props.imgWidth}; //3.5 em
                margin-right: 1rem;
            }
            h1{
                font-size: ${(props) => props.textWidth}; //2 em
                color: white;
                span{
                    color: #F7B731;
                }
            }
`