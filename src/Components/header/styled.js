import styled from "styled-components"

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
        }
`
export const ProfileStyle = styled.div`
    position: absolute ;
    display: flex ;
    flex-direction: column ;
    justify-content: space-around ;
    background-color: white ;
    width: 10vw ;
    height: 13vh ;
    top: 3.1vw ;
    right: 2.5vw ;
    border-radius: 8px 0px 8px 8px ;
    -webkit-box-shadow: 0px 10px 20px 1px rgba(79,79,79,0.15); 
    box-shadow: 0px 10px 20px 1px rgba(79,79,79,0.15);
    
    hr{
        border: none ;
        height: 1px;
        background-color: rgb(128, 128, 128, 0.3);
    }
    .changeUser{
        display: flex ;
        flex: 1 ;
        align-items: center ;
        justify-content: center ;
        :hover{
            background-color:#f4f4f4;
            transition: .7s ;
        }
    }
    .exit{
        display: flex ;
        flex: 1 ;
        align-items: center ;
        justify-content: center ;
        border-radius: 0  0 8px 8px ;
        color: #ce0c4b ;
        cursor: pointer;
        //font-size: 18px ;
        :hover{
            //color: white ;
            background-color: #f9dde7;
            transition: .7s ;
        }
        
    }
`
