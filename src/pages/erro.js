import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import error from '../images/error.svg'
import styled from "styled-components"
    

export function Erro404(){

    const ErrorStyle = styled.div`
        width: 100vw ;
        height: 100vh ;
        display: flex ;
        align-items: center ;
        flex-direction: column ;
        justify-content: center ;
        background: linear-gradient(
            180deg,
            hsla(221, 89%, 43%, 1) 0%,
            hsla(204, 98%, 46%, 1) 100%
        );
        color: white ;
        .text-img{
            display: flex ;
            align-items: center ;
            flex-direction: column ;
            justify-content: center ;
            
            p{
                font-size: 20px ;
                margin-bottom: 10px ;
            }
            img{
                width: 250px ;
                border-radius: 10px ;
            }
            }
        #btn{
            margin-top: 10px ;
            font-weight: bold ;
        }
    `

    return(
        <ErrorStyle>
            <div className="text-img">
                <p>
                Pagina não encontrada! 
                </p>
                <img src="https://c.tenor.com/29Ok5pc0ivAAAAAd/gatinho-gato.gif"/>
            </div>
            <Link to={"/login"}>
                <Button variant="contained" id={'btn'}>
                Voltar para o inicio
                </Button>
            </Link>
        </ErrorStyle>
    )
}