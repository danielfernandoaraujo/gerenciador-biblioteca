import { useState } from "react";
import { ModalUserStyle } from "./styled";

export function ModalUser(){

    const [User, setUser] = useState("")
    
    const armazenarLocalStorage=(chave,valor)=>{
        JSON.stringify(localStorage.setItem(chave, valor)) 
        
    }
     

    return(
        <ModalUserStyle>
                <form className="main">
                        <div className="title">
                            <p>Seja bem vindo a biblioteca!</p>
                        </div>
                        <div className="input">
                            <input placeholder="Qual é o seu nome?" 
                            onChange={(e)=>setUser(e.target.value)} 
                            />
                        </div>
                    <div className="escolha">
                        <button className="exit skip" type="submit" onClick={()=>armazenarLocalStorage('nome', User)}>
                            Confirmar
                        </button>
                        
                </div>
                </form>
            </ModalUserStyle>
    )
}