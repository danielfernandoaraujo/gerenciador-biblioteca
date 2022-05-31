import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/fire";
import { Link, useNavigate } from "react-router-dom";
import { LoginPage } from "./styled";
import atheneu from "../../images/atheneu.svg";
import { AuthContext } from "../../context/AuthContext";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import "animate.css";

export function Login() {
  const [error, setError] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        setError(true);
        // ..
      });
  };

  return (
    <LoginPage>
      <form onSubmit={handleLogin} autoComplete="off">
        <div className="conteiner">
          <div className="logo">
            <img src={atheneu} />
            <h1>
              Biblioteca
              <br />
              <span>+</span>Atheneu
            </h1>
          </div>
          <div className="box-input">
            <div className="title">
              <p>Acessar sistema</p>
            </div>
            <div className="inputs">
              <div className="input">
                {/* <label>
                                    Email de acesso
                                        </label> */}
                {/* <input type="email" 
                                    placeholder={"Digite o email"}
                                    onChange={(e)=>setemail(e.target.value)}
                                    /> */}
                {error ? (
                  <TextField
                    error
                    id="standard-error"
                    label="Email"
                    variant="standard"
                    type={"email"}
                    onChange={(e) => setemail(e.target.value)}
                  />
                ) : (
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    type={"email"}
                    onChange={(e) => setemail(e.target.value)}
                  />
                )}
              </div>
              <div className="input">
                {/* <label className="label">
                                    Senha de acesso
                                        </label> */}
                {/* <input type="password" 
                                        placeholder="Digite a senha"
                                    onChange={(e)=>setpassword(e.target.value)}
                                    /> */}
                {error ? (
                  <TextField
                    error
                    id="standard-error"
                    label="Senha"
                    variant="standard"
                    type={"password"}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                ) : (
                  <TextField
                    id="standard-basic"
                    label="Senha"
                    variant="standard"
                    type={"password"}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                )}
              </div>
            </div>

            <div className="button">
              <button type="submit">Entrar</button>
              <div className="msg-error">
                {error && (
                  <Alert severity="error" className="alert">
                    Email ou senha estão incorretos!
                  </Alert>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="creditos">
        <div className="icons">
          <a className="icon" href="https://github.com/danielfernandoaraujo">
            <AiOutlineGithub size={25} />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/daniel-fernando-6609b31b9/"
          >
            <AiOutlineLinkedin size={25} />
          </a>
          <a className="icon" href="https://www.instagram.com/danielferna_/">
            <AiOutlineInstagram size={25} />
          </a>
        </div>
        <p>Desenvolvido por ©Daniel Fernando</p>
      </div>
    </LoginPage>
  );
}
