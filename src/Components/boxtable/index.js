import { DataTable } from "../datatable";
import { BoxStyle } from "./styled";
import Button from '@mui/material/Button';
import {IoAddCircleOutline} from 'react-icons/io5'
import { TextField } from "@mui/material";

export function Boxtable(props){
    return(
        <BoxStyle>
            <div className="title">
                <h1>{props.title}</h1>
                
            </div>
            <div className="table">
                <div className="top">
                    <TextField id="outlined-search" 
                    label="Pesquisar" 
                    type="search" 
                    size="small"
                    style={{width: 300}}
                    />
                    <Button className="btn-add" variant="contained" size="medium" disableElevation endIcon={<IoAddCircleOutline size={22}/>}>
                        Adicionar
                    </Button>
                </div>
        
                <DataTable/>
            </div>
        </BoxStyle>
    )
}