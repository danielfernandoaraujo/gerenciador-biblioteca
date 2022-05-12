import { Aviso, HomePage } from "./styled";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { auth } from "../../services/fire";
import { Sidebar } from "../../Components/slidebar";


export function Alunos(){

    const page = "alunos";
    
    const {dispatch} = useContext(AuthContext)

    function handleLogout(){

        dispatch({type:"LOGOUT"})
    }
    return(
        <HomePage>
            <Aviso>
                    <div className="main">

                    
                    <div className="title">
                        <h1>
                        Atenção
                        </h1>
                    </div>
                    <div className="conteiner">
                        <h2>
                            Esse sitema está em desenvolvimento, portanto ainda
                            ainda não funciona corretamente em dispositivos móveis. 😅
                        </h2>
                    </div>
                    <div className="escolha">
                        <button className="exit" onClick={handleLogout}>
                            Sair
                        </button>
                    </div>
                </div>
            </Aviso>
            <Sidebar page={page}/>
            <div className="main">

            </div>
        </HomePage>
    )
}