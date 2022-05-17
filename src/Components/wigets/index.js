import {IoPersonAddSharp} from "react-icons/io5"
import { Link } from "react-router-dom";
import { WidgetStyled } from "./styled";
import {FaBook} from "react-icons/fa"
import {IoMdExit} from "react-icons/io"
import {SiBookstack} from "react-icons/si"
import {GiOpenBook} from "react-icons/gi"


export function Widget({type}){
    
    let data;

    const num = 200;

    switch(type){
        case "alunos":
            data={
                title:"ALUNOS",
                link:"Ver todos os alunos",
                to:"/alunos",
                icon: (
                    <IoPersonAddSharp className="icon" size={20} style={{
                        color:"white", 
                        backgroundColor:"black"}
                    }/>
                )
            }
        break;
        case "livros":
            data={
                title:"LIVROS",
                link:"Ver todos os livros",
                to:"/livros",
                icon: (
                    <FaBook size={20} className="icon" style={{
                        color:"white", 
                        backgroundColor:"black"}
                    }/>
                )
            }
        break;
        case "emprestimos":
            data={
                title:"EMPRESTIMOS",
                link:"Ver todos os emprestimos",
                to:"/emprestimos",
                icon: (
                    <GiOpenBook size={20} className="icon" style={{
                        color:"white", 
                        backgroundColor:"black"}
                    }/>
                )
            }
        break;
        case "pendentes":
            data={
                title:"PENDENTES",
                link:"Ver todos os pendentes",
                to:"/emprestimos",
                icon: (
                    <SiBookstack size={20} className="icon" style={{
                        color:"white", 
                        backgroundColor:"black"}
                    }/>
                )
            }
        break;
        default:
        break;
    }
    return(
        <WidgetStyled>
            <div className="left">
                <div className="title"><p>{data.title}</p></div>
                <div className="number"><p>{num}</p></div>
                <Link to={data.togit} className="link">{data.link}</Link>
            </div>
            <div className="right">
                    {data.icon}
            </div>
        </WidgetStyled>
    )
}