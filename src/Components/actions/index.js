import { ActionsStyled } from "./styled";
import addBook  from "./../../images/add_books.svg"
import addLoan from "./../../images/add_loan.svg"
import addClass from "./../../images/add_mod_class.svg"
import addUser from "./../../images/add_user.svg"

export function Actions({ type }){
    let data;

    switch (type) {
        case "alunos":
          data = {
            title: "Adicionar Aluno",
            img: addUser,
            color: "green",
          };
          break;
        case "livros":
            data = {
                title: "Adicionar Livro",
                img: addBook,
                color: "#8c198c",
          };
          break;
        case "emprestimos":
            data = {
                title: "Adicionar Emprestimo",
                img: addLoan,
                color: "#007fff",
            };
          break;
        case "turmas":
            data = {
                title: "Adicionar turma",
                img: addClass,
                color: "#e50000",
          };
          break;
        default:
          break;
      }

    return(
        <ActionsStyled color={data.color}>
            <div className="left">
                <p>{data.title}</p>
            </div>
            <div className="right">
                <img className="imagem" src={data.img}/>
            </div>
        </ActionsStyled>
    )
}