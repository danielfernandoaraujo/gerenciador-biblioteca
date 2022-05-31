import { MdPersonAddAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import { WidgetStyled } from "./styled";
import { RiBook2Line } from "react-icons/ri";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { GoBook } from "react-icons/go";

export function Widget({ type }) {
  let data;

  const num = 0;

  switch (type) {
    case "alunos":
      data = {
        title: "ALUNOS",
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
          <p>{num}</p>
        </div>
        <Link to={data.to} className="link">
          {data.link}
        </Link>
      </div>
      <div className="right">{data.icon}</div>
    </WidgetStyled>
  );
}
