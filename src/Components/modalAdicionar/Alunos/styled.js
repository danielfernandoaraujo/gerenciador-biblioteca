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
        padding: 15px 0 15px 0 ;
        .right{
            flex: 1 ;
            display: flex ;
            flex-direction: column ;
            margin-right: 5px ;
            height: 100% ;
            width: 80% ;
            
        }
        .left{
            display: flex ;
            flex:1 ;
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