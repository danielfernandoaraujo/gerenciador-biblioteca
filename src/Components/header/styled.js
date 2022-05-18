import styled from "styled-components"
import 'animate.css';

export const Main = styled.div`
    display: flex ;
    flex: 1 ;
    background: hsla(0, 0%, 100%, 1);
    background: radial-gradient(circle, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 95%, 1) 100%);
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
        .profile{
            display: flex ;
            align-items: center ;
            justify-content: center ;
            margin-right: 32px ;
            cursor: pointer;
            :hover{
                transform:scale(1.03) ;
                transition: .4s ;
            }
        }
`