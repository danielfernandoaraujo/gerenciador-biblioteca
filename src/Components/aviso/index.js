import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AvisoStyled } from "./styled";

export function Aviso(){

    const {dispatch} = useContext(AuthContext)

    function handleLogout(){

        dispatch({type:"LOGOUT"})
    }

    return(
        <AvisoStyled>
                <div className="main">

                
                <div className="title">
                    <h1>
                    Atenção
                    </h1>
                </div>
                <div className="conteiner">
                    <h2>
                        Esse sitema está em desenvolvimento, portanto ainda não tem
                        suporte para dispositivos móveis.
                    </h2>
                </div>
                <div className="escolha">
                    <button className="exit" onClick={handleLogout}>
                        Sair
                    </button>
                </div>
            </div>
        </AvisoStyled>
    )
            }