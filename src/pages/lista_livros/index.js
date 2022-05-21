import { LivrosStyled } from "./styled";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { auth } from "../../services/fire";
import { Sidebar } from "../../Components/slidebar";
import { Aviso } from "../../Components/aviso";
import { Boxtable } from "../../Components/boxtable";


export function Livros(){

    const page = "livros";
    
    const {dispatch} = useContext(AuthContext)

    function handleLogout(){

        dispatch({type:"LOGOUT"})
    }
    return(
        <LivrosStyled>

            <Aviso/>
                    
            <Sidebar page={page}/>

            <Boxtable title={'Livros'}/>

        </LivrosStyled>
    )
}