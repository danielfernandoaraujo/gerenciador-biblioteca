import { ActionsStyled } from "./styled";
import addBook from "./../../images/add_books.svg";
import addLoan from "./../../images/add_loan.svg";
import addClass from "./../../images/add_mod_class.svg";
import addUser from "./../../images/add_user.svg";

export function Actions({ type }) {
  let data;

  switch (type) {
    case "alunos":
      data = {
        title: "Adicionar",
        subTitle: "Aluno",
        img: addUser,
        colorPrimary: "green",
        colorHover: "#4ca64c"
      };
      break;
    case "livros":
      data = {
        title: "Adicionar",
        subTitle: "Livro",
        img: addBook,
        colorPrimary: "#8c198c",
        colorHover: "#a347a3"
      };
      break;
    case "emprestimos":
      data = {
        title: "Adicionar",
        subTitle: "Emprestimo",
        img: addLoan,
        colorPrimary: "#007fff",
        colorHover: "#3398ff"
      };
      break;
    case "turmas":
      data = {
        title: "Adicionar",
        subTitle: "Turma",
        img: addClass,
        colorPrimary: "#e50000",
        colorHover: "#ea3333"
      };
      break;
    default:
      break;
  }

  return (
    <ActionsStyled colorPrimary={data.colorPrimary} colorHover={data.colorHover}>
      <div className="left">
        <p>{data.title}<br/>{data.subTitle}</p>
      </div>
      <div className="right">
        <img className="imagem" src={data.img} />
      </div>
    </ActionsStyled>
  );
}
