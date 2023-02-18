import { HomeStyled } from "./styled";
import { Sidebar } from "../../Components/slidebar";
import { Header } from "../../Components/header";
import { Aviso } from "../../Components/aviso";
import { Widget } from "../../Components/wigets";
import { Actions } from "../../Components/actions";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import AlunoModal from "../../Components/modalAdicionar/Alunos";
import LivroModal from "../../Components/modalAdicionar/Livros";
import { useState } from "react";
import { RiHeartLine } from "react-icons/ri";

export function Home() {
  const page = "home";

  return (
    <HomeStyled>

      <Aviso/>

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
            <div className="credits">
              Desenvolvido por Daniel Fernando
            </div>
          </div>
        </div>
      </div>
    </HomeStyled>
  );
}
