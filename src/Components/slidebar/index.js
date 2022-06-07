import { Main } from "./styled";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import atheneu from "../../images/atheneu.svg";
import { BsFillPersonFill } from "react-icons/bs";
import { ImBook } from "react-icons/im";
import { IoMdExit } from "react-icons/io";
import { ImHome } from "react-icons/im";
import { GiOpenBook } from "react-icons/gi";
import { Link } from "react-router-dom";
import { ModalUser } from "../modalUser";

export function Sidebar(props) {
  const { dispatch } = useContext(AuthContext);

  function handleLogout() {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <Main>
      {/*localStorage.getItem("nome") == null && <ModalUser />*/}

      <Link to={"/"} className="logo">
        {/* <img src={atheneu} /> */}
        <h1> 
          Biblioteca
          <br />
          <span>+</span>Atheneu
        </h1>
      </Link>

      <div className="options">
        <Link
          to={"/"}
          className="option"
          id={props.page === "home" ? "home" : null}
        >
          <ImHome size={25} color="#FFF" />
          <p>Início</p>
        </Link>
        <Link
          to={"/alunos"}
          className="option"
          id={props.page === "alunos" ? "alunos" : null}
        >
          <BsFillPersonFill size={25} color="#FFF" />
          <p>Alunos</p>
        </Link>
        <Link
          to={"/livros"}
          className="option"
          id={props.page === "livros" ? "livros" : null}
        >
          <ImBook size={25} color="#FFF" />
          <p>Livros</p>
        </Link>
        <Link
          to={"/emprestimos"}
          className="option"
          id={props.page === "emprestimos" ? "emprestimos" : null}
        >
          <GiOpenBook size={25} color="#FFF" />
          <p>Empréstimos</p>
        </Link>
      </div>

      <div className="logout">
        <a onClick={handleLogout} className="option logout-btn">
          <IoMdExit size={25} color="#FFF" />
          <p>Sair</p>
        </a>
      </div>
    </Main>
  );
}
