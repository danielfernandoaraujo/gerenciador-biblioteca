import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/fire";
import { useNavigate } from "react-router-dom";

import {LoginPage } from "./styled";
import atheneu from "../../images/atheneu.svg"
import { AuthContext } from "../../context/AuthContext";

export function Login(){

    const [error, setError] = useState(false)
    const [email, setemail] = useState("")      
    const [password, setpassword] = useState("")

    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) =>{
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            dispatch({type:"LOGIN", payload:user})
            console.log(user)
            navigate("/")
            // ...
        })
        .catch((error) => {
            setError(true)
            // ..
        });
    }

    return(
    <LoginPage>
        <form onSubmit={handleLogin}>
            <div className="conteiner">
                <div className="logo">
                        <img src={atheneu} />
                        <h1>Biblioteca<br/><span>+</span>Atheneu</h1>
                    </div>
                <div className="box-input">
                    <div className="title">
                            <p>Acessar sistema</p>
                        </div>
                    <div className="inputs">
                            <div className="input">
                                    <label>
                                    Email de acesso
                                        </label>
                                    <input type="email" 
                                    // placeholder={"Digite o email de acesso..."}
                                    onChange={(e)=>setemail(e.target.value)}
                                    />
                                </div>
                            <div className="input">
                                    <label className="label">
                                    Senha de acesso
                                        </label>
                                        <input type="password" 
                                        // placeholder=" Digite a senha de acesso..."
                                        onChange={(e)=>setpassword(e.target.value)}
                                        />
                                </div>
                        </div>
                        
                    <div className="button">
                        <button type="submit">
                            Entrar
                        </button>
                        <div className="msg-error">
                        { error && <p>Email ou  senha incorreto!</p>}
                        </div>
                        </div>    
                    </div>
            </div>
            </form>
    </LoginPage>
    )
}