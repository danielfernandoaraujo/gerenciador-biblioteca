import { HomePage } from "./styled";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { auth } from "../../services/fire";

export function Home(){

    const {dispatch} = useContext(AuthContext)

    function handleLogout(){

        dispatch({type:"LOGOUT"})
    }
    return(
        <HomePage>
            <h1>
                HOME
            </h1>
            <button onClick={handleLogout}>
                Logout
            </button>
        </HomePage>
    )
}