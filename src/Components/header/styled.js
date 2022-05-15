import styled from "styled-components"

export const Main = styled.div`
    display: flex ;
    flex: 1 ;
    background-color: #f1f1f1 ;
    justify-content: space-between ;
    align-items: center ;
        .welcome{
            display: flex ;
            justify-content: center ;
            margin-left: 32px ;
            font-size: 20px ;
            font-weight: bold ;
            color: #0c4acf;
            .msg{
                display: flex ;
                justify-content: center ;
                align-items: center ;
                p{
                    margin-right: 5px ;
                }
            }
                
        }
`