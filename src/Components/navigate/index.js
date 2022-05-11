import { Logo } from "../logo";
import { Main } from "./styled";
import atheneu from "../../images/atheneu.svg"
import {MdPersonAddAlt1} from "react-icons/md"
import { Link } from "react-router-dom";

export function Sidebar(){

    return(
        <Main>
            <div className="logo">
                        <img src={atheneu} />
                        <h1>Biblioteca<br/><span>+</span>Atheneu</h1>
                </div>
            <div className="options-top">
                    <Link to={"/login"} className="option home">
                        <MdPersonAddAlt1 size={25} color="#FFF"/>
                        
                    </Link>
                    <div className="option addLivro">

                    </div>
                    <div className="option addAluno">

                    </div>
                    <div className="option emprestimos">

                    </div>
            </div>
            <div className="logout">
                    <div className="option logout">

                    </div>
            </div>
        </Main>
    )
}