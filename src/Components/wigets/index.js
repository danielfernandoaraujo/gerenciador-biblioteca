import {IoPersonAddSharp} from "react-icons/io5"
import { WidgetStyled } from "./styled";


export function Widget(){
    
    return(
        <WidgetStyled>
            <div className="left">
                <div className="title"><p>ALUNOS</p></div>
                <div className="number">1000</div>
                <div className="link">Ver todos os alunos</div>
            </div>
            <div className="right">
                <div className="icon">
                    <IoPersonAddSharp size={20} color="white"/>
                    </div>
            </div>
        </WidgetStyled>
    )
}