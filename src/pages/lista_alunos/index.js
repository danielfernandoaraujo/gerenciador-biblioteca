import { AlunosStyled } from "./styled";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { auth } from "../../services/fire";
import { Sidebar } from "../../Components/slidebar";
import { Aviso } from "../../Components/aviso";
import { DataTable } from "../../Components/datatable";
import { Boxtable } from "../../Components/boxtable/Alunos";

export function Alunos() {
  const page = "alunos";

  const { dispatch } = useContext(AuthContext);

  function handleLogout() {
    dispatch({ type: "LOGOUT" });
  }
  return (
    <AlunosStyled>
      <Aviso />

      <Sidebar page={page} />

      <Boxtable />
    </AlunosStyled>
  );
}
