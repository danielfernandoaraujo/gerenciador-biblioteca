import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiSunFill } from "react-icons/ri";
import { RiSunFoggyFill } from "react-icons/ri"; 
import {IoMdExit} from "react-icons/io"
import { Main } from "./styled";


export function Header(props){
    //const user = null;
    const data = new Date();
    const hora = 7 ;//data.getHours()
    const user = props.user;

    function Welcome(){
        if(hora >= 0 && hora <= 12){
            return <Bomdia/>
        }
        if(hora >= 12 && hora <= 18){
            return <BoaTarde/>
        } else {
            return <BoaNoite/>
        }
    
    }
    function Bomdia(){
        return <div className="msg"><p>Bom dia, {user}</p> <RiSunFill size={25}/></div>
    }
    function BoaTarde(){
        return <div className="msg"><p>Boa tarde, {user}</p> <RiSunFoggyFill size={25}/></div>
    }
    function BoaNoite(){
        return <div className="msg"><p>Boa noite, {user}</p> <BsFillMoonStarsFill size={16}/></div>
    }

    return(
        <Main>
            <div className="welcome">
                <Welcome/>
            </div>
        </Main>
    )
}