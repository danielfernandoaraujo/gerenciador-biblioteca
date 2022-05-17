import { Logo } from "../logo";
import { Main, ModalDesconectar, ModalDesconectarStyled } from "./styled";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import atheneu from "../../images/atheneu.svg"
import {IoPersonAddSharp} from "react-icons/io5"
import {FaBookMedical} from "react-icons/fa"
import {IoMdExit} from "react-icons/io"
import {ImHome} from "react-icons/im"
import {GiOpenBook} from "react-icons/gi"
import { Link } from "react-router-dom";
import { Header } from "../header";
import { ModalUser } from "../modalUser";


export function Sidebar(props){

    const {dispatch} = useContext(AuthContext)

    const [Desconectar, setDesconectar] = useState(false)

    

    function handleLogout(){

        dispatch({type:"LOGOUT"})
        
    }

    return(
        <Main>
            {/* { localStorage.getItem('nome') == null &&
            <ModalUser/>
            } */}

            <Link to={"/"} className="logo">
                        <img src={atheneu} />
                        <h1>Biblioteca<br/><span>+</span>Atheneu</h1>
                </Link>

            <div className="options">
                    <Link to={"/"} className="option" id={
                        props.page === "home" ? "home": null}>
                        <ImHome size={25} color="#FFF"/>
                        <p>Início</p>
                    </Link>
                    <Link to={"/alunos"} className="option" id={
                        props.page === "alunos" ? "alunos": null}>
                        <IoPersonAddSharp size={25} color="#FFF"/>
                        <p>Alunos</p>
                    </Link>
                    <Link to={"/livros"} className="option" id={
                        props.page === "livros" ? "livros": null}>
                        <FaBookMedical size={25} color="#FFF"/>
                        <p>Livros</p>
                    </Link>
                    <Link to={"/emprestimos"} className="option" id={
                        props.page === "emprestimos" ? "emprestimos": null}>
                        <GiOpenBook size={25} color="#FFF"/>
                        <p>Emprestimos</p>
                    </Link>
            </div>
            
            <div className="logout">
                    <a onClick={handleLogout} className="option logout-btn">
                        <IoMdExit size={25} color="#FFF"/>
                        <p>Desconectar</p>
                    </a>
            </div>
        </Main>
    )
}