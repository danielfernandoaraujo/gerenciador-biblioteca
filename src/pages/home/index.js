import { HomeStyled } from "./styled";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { auth } from "../../services/fire";
import { Sidebar } from "../../Components/slidebar";
import { Header } from "../../Components/header";
import { Modal } from "./styled";
import { ModalUser } from "../../Components/slidebar/styled";
import { Aviso } from "../../Components/aviso";
import { Widget } from "../../Components/wigets";


export function Home(){

    const page = "home";

    const user = localStorage.getItem('nome')
    
    
    return(
        <HomeStyled>

            <Aviso/>

            <Sidebar page={page}/>

            <div className="main">
                <Header user={user}/>
                <div className="content">
                    
                        <div className="widget">
                            <Widget type={"alunos"}/>
                            <Widget type={"livros"}/>
                            <Widget type={"emprestimos"}/> 
                            <Widget type={"pendentes"}/>
                        </div>
                        <div className="info">

                        </div>
                    
                </div>
            </div>
        </HomeStyled>
    )
}