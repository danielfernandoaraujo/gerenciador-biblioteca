import atheneu from "../../images/atheneu.svg"
import { Main } from "./styled"


export function Logo(){

    return(
        <Main>
            <img src={atheneu} />
            <h1>Biblioteca<br/><span>+</span>Atheneu</h1>
        </Main>
    )
}