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
        background-color: #2154bf ;
        color: white ;
        .text-img{
            display: flex ;
            align-items: center ;
            flex-direction: column-reverse ;
            justify-content: center ;
            img{
                width: 40vh ;
            }
            }
        #btn{
            margin-top: 20px ;
            font-weight: bold ;
        }
    `

    return(
        <ErrorStyle>
            <div className="text-img">
                <h1>
                Pagina não encontrada! 
                </h1>
                <img src={error}/>
            </div>
            <Link to={"/login"}>
                <Button variant="contained" id={'btn'}>
                Voltar para o inicio
                </Button>
            </Link>
        </ErrorStyle>
    )
}