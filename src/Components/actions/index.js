import { ActionsStyled } from "./styled";
import addBook from "./../../images/add_books.svg";
import addLoan from "./../../images/add_loan.svg";
import addClass from "./../../images/add_mod_class.svg";
import addUser from "./../../images/add_user.svg";
import { ModalStyled } from "../boxtable/styled";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import AlunoModal from "../modalAdicionar/Alunos";
import LivroModal from "../modalAdicionar/Livros";
import { useState } from "react";
import EmprestimoModal from "../modalAdicionar/Emprestimos";

export function Actions({ type }) {
  let data;

  switch (type) {
    case "alunos":
      data = {
        title: "Adicionar",
        subTitle: "Aluno",
        img: addUser,
        colorPrimary: "green",
        colorHover: "#4ca64c",
        openModal :(
          ()=>{if(!OpenAluno){setOpenAluno(true)}}
        ),
      };
      break;
    case "livros":
      data = {
        title: "Adicionar",
        subTitle: "Livro",
        img: addBook,
        colorPrimary: "#8c198c",
        colorHover: "#a347a3",
        openModal :(
          ()=>{if(!OpenLivro){setOpenLivro(true)}}
        ),
      };
      break;
    case "emprestimos":
      data = {
        title: "Adicionar",
        subTitle: "Emprestimo",
        img: addLoan,
        colorPrimary: "#007fff",
        colorHover: "#3398ff",
        openModal :(
          ()=>{if(!OpenEmprestimo){setOpenEmprestimo(true)}}
        ),
      };
      break;
    case "turmas":
      data = {
        title: "Adicionar",
        subTitle: "Turma",
        img: addClass,
        colorPrimary: "#e50000",
        colorHover: "#ea3333",
        openModal :(
          ()=>{console.log('test')}
        ),
      };
      break;
    default:
      break;
  }

  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    bgcolor: "#ffffff",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
  };

  const [OpenAluno, setOpenAluno] = useState(false);
  const [OpenLivro, setOpenLivro] = useState(false);
  const [OpenEmprestimo, setOpenEmprestimo] = useState(false);

  const handleCloseAluno = () => setOpenAluno(false);
  const handleCloseLivro = () => setOpenLivro(false);
  const handleCloseEmprestimo = () => setOpenEmprestimo(false);

  const childToParent = (childdata) => {
    setOpenAluno(childdata);
    setOpenLivro(childdata);
    setOpenEmprestimo(childdata);
  };

  

  return (
    <ActionsStyled colorPrimary={data.colorPrimary} colorHover={data.colorHover} onClick={data.openModal}>

        <Modal
          open={OpenAluno}
          onClose={handleCloseAluno}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AlunoModal childToParent={childToParent} />
          </Box>
        </Modal>

        <Modal
          open={OpenLivro}
          onClose={handleCloseLivro}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <LivroModal childToParent={childToParent} />
          </Box>
        </Modal>

        <Modal
          open={OpenEmprestimo}
          onClose={handleCloseEmprestimo}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <EmprestimoModal childToParent={childToParent} />
          </Box>
        </Modal>

      <div className="left">
        <p>{data.title}<br/>{data.subTitle}</p>
      </div>
      <div className="right">
        <img className="imagem" src={data.img} />
      </div>
    </ActionsStyled>
  );
}
