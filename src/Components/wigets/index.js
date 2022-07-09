import { MdPersonAddAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { WidgetStyled } from "./styled";
import { RiBook2Line } from "react-icons/ri";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { GoBook } from "react-icons/go";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { CircularProgress } from "@mui/material";
import { format, add } from "date-fns";

export function Widget({ type }) {
  let data;
  const [AlunosArr, setAlunosArr] = useState([])
  const [LivrosArr, setLivrosArr] = useState([])
  const [EmprestimosArr, setEmprestimosArr] = useState([])
  const [PendentesArr, setPendentesArr] = useState([])
  const [Pendentes, setPendentes] = useState([])


  useEffect(()=>{
    async function getAlunos(){
      const response = await api.get('alunos')
      setAlunosArr(response.data)
    }
    getAlunos()
  }, [AlunosArr])

  useEffect(()=>{
    async function getLivros(){
      const response = await api.get('livros')
      setLivrosArr(response.data)
    }
    getLivros()
  }, [LivrosArr])

  useEffect(()=>{
    async function getEmprestimos(){
      const response = await api.get('emprestimos')
      setEmprestimosArr(response.data)
      setPendentesArr(response.data);
    }

    getEmprestimos()

    if (PendentesArr !== "") {
      let dataAtual = new Date();

      setPendentes(PendentesArr
        .map(createRows)
        .filter((e) => e.data_prazo_formatada < dataAtual)
        );
    } else {
    }
  }, [EmprestimosArr]);
//Organizar os Arrays
  function createRows(elemento) {

    let ArrEmprestimos = {
      id: elemento._id,
      nome_aluno: elemento.nome_aluno,
      nome_livro: elemento.nome_livro,
      data_prazo: format(add(new Date(elemento.data_prazo), {days:1}), 'dd/MM/yyyy'),
      data_prazo_formatada: new Date(elemento.data_prazo)
    };
    return ArrEmprestimos;
  }

  switch (type) {
    case "alunos":
      data = {
        title: "ALUNOS",
        number: AlunosArr.length || <CircularProgress />,
        link: "Ver alunos",
        to: "/alunos",
        icon: (
          <MdPersonAddAlt
            className="icon"
            size={20}
            style={{
              color: "green",
              backgroundColor: "#99cc99",
            }}
          />
        ),
      };
      break;
    case "livros":
      data = {
        title: "LIVROS",
        number: LivrosArr.length || <CircularProgress />,
        link: "Ver livros",
        to: "/livros",
        icon: (
          <RiBook2Line
            size={20}
            className="icon"
            style={{
              color: "#8c198c",
              backgroundColor: "#d1a3d1",
            }}
          />
        ),
      };
      break;
    case "emprestimos":
      data = {
        title: "EMPRESTIMOS",
        number: EmprestimosArr.length || <CircularProgress />,
        link: "Ver empréstimos",
        to: "/emprestimos",
        icon: (
          <GoBook
            size={20}
            className="icon"
            style={{
              color: "#007fff",
              backgroundColor: "#99cbff",
            }}
          />
        ),
      };
      break;
    case "pendentes":
      data = {
        title: "PENDENTES",
        number: Pendentes.length || <CircularProgress />,
        link: "Ver pendentes",
        to: "/emprestimos",
        icon: (
          <MdOutlineLibraryBooks
            size={20}
            className="icon"
            style={{
              color: "#e50000",
              backgroundColor: "#ff9999",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <WidgetStyled>
        <div className="left">
          <div className="title">
            <p>{data.title}</p>
          </div>
          <div className="number">
            <p>{data.number}</p>
          </div>
          <Link to={data.to} className="link">
            {data.link}
          </Link>
        </div>
        <div className="right">{data.icon}</div>
    </WidgetStyled>
  );
}
