import { Aviso, HomePage } from "./styled";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { auth } from "../../services/fire";
import { Sidebar } from "../../Components/slidebar";
import { Header } from "../../Components/header";
import { Modal } from "./styled";
import { ModalUser } from "../../Components/slidebar/styled";


export function Home(){

    const page = "home";

    const user = localStorage.getItem('nome')
    
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
                            não funciona corretamente em dispositivos móveis. 😅
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
                <Header user={user}/>
                <div className="content">

                </div>
            </div>
        </HomePage>
    )
}