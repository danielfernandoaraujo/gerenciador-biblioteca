import { useContext, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiSunFill } from "react-icons/ri";
import { RiSunFoggyFill } from "react-icons/ri"; 
import {IoMdExit} from "react-icons/io"
import { Main, ProfileStyle } from "./styled";
import Relogio from "../relogio";
import { ModalUser } from "../slidebar/styled";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


export function Header(props){
    const data = new Date();
    const hora = data.getHours();
    const user = props.user;

    const {dispatch} = useContext(AuthContext)

    function handleLogout(){

        dispatch({type:"LOGOUT"})
        
    }


    function Welcome(){
        if(hora >= 0 && hora <= 12){
            return <Bomdia/>
        }
        if(hora >= 12 && hora <= 18){
            return <BoaTarde/>
        }
        if(hora >= 18 && hora <= 23){
            return <BoaNoite/>
        }
    
    }
    function Bomdia(){
        return <div className="msg"><p>Bom dia {user}</p> <RiSunFill size={25}/></div>
    }
    function BoaTarde(){
        return <div className="msg"><p>Boa tarde {user}</p> <RiSunFoggyFill size={25}/></div>
    }
    function BoaNoite(){
        return <div className="msg"><p>Boa noite {user}</p> <BsFillMoonStarsFill size={16}/></div>
    }
    

    return(
        <Main >
            <div className="welcome">
                
                <Welcome/>
                
            </div>
        </Main>
    )
}