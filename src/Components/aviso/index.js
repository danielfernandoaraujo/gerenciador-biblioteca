import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AvisoStyled } from "./styled";

export function Aviso(){

    return(
        <AvisoStyled>
            <p>O gerenciador da biblioteca ainda está <br/> em desenvolvimento para telas menores</p>
            <img src="https://acegif.com/wp-content/uploads/cat-typing-12.gif"/>
        </AvisoStyled>
    )

} 