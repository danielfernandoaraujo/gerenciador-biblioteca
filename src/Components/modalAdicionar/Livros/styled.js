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
    .input{
        display: flex ;
        align-items: center ;
        justify-content: center ;
        .left{
            display: flex ;
            flex-direction: column ;
            margin-top: 15px ;
            height: 100% ;
            width: 100% ;
            
        }

    }
    .btn{
        margin-top: 32px ;
        width: 100% ;
        background-color:#2154bf;
    }
`