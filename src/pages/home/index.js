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
import { Actions } from "../../Components/actions";

export function Home() {
  const page = "home";

  return (
    <HomeStyled>
      <Aviso />

      <Sidebar page={page} />

      <div className="main">
        <Header />
        <div className="top">
          <div className="widget">
            <Widget type={"alunos"} />
            <Widget type={"livros"} />
            <Widget type={"emprestimos"} />
            <Widget type={"pendentes"} />
          </div>
          <div className="bottom">
            <div className="title_actions">
              <p>
                Ações rápidas
              </p>
              </div>
            <div className="actions">
              <Actions type={"alunos"}/>
              <Actions type={"livros"}/>
              <Actions type={"emprestimos"}/>
              <Actions type={"turmas"}/>
            </div>
            <div className="pendings"></div>
          </div>
        </div>
      </div>
    </HomeStyled>
  );
}
