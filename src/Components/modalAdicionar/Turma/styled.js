import styled from "styled-components"

export  const Content = styled.div`
    height: 100% ;
    width: 100% ;
    display: flex ;
    justify-content: space-between ;

    flex-direction: column ;
    .title{
        text-align: left ;
        color: #3e3e3e ;
    }
    .main{
        display: flex ;
        justify-content: center ;
        align-items: center ;
        flex-direction: column ;
        .add{
            width: 50% ;
            height: 100% ;
            margin-top: 10px ;
            display: flex ;
            align-items: flex-end;
            justify-content: space-around ;
        }
        .list{
            margin-top: 20px ;
        }
    }
    .msg {
    position: absolute;
    height: 100%;
    width: 50%;
    top: 101%;
    left: 26%;

    .alert {
      animation: flipInX;
      animation-duration: 0.7s;
    }
    }
`