import { BoxStyle } from "./styled";
import Button from '@mui/material/Button';
import {IoAddCircleOutline} from 'react-icons/io5'
import { TextField } from "@mui/material";
import { useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ModalStyled } from './styled';
import AlunoTable from "../tabelas/Alunos/index.js"
import LivroTable from "../tabelas/Livros/index.js"
import EmprestimoTable from "../tabelas/Emprestimos/index.js"
import AlunoModal from "../modalAdicionar/Alunos/index.js"
import LivroModal from "../modalAdicionar/Livros";
import EmprestimoModal from "../modalAdicionar/Emprestimos";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
  };



export function Boxtable(props){

     function Table(props){

         const type = props.type;

         if(type  === "Alunos"){
             return <AlunoTable/>
         }
         if(type  === "Livros"){
             return <LivroTable/>
         }
         if(type  === "Emprestimos"){
             return <EmprestimoTable/>
         }
    }

    function ModalContent(props){

        const type = props.type;

        if(type === "Alunos"){
            return <AlunoModal/>
        }
        if(type === "Livros"){
            return <LivroModal/>
        }
        if(type === "Emprestimos"){
            return <EmprestimoModal/>
        }
   }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return(
        <BoxStyle>
            
            <ModalStyled>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style} className="box">
                    <ModalContent type={props.title}/>
                </Box>
                </Modal>
            </ModalStyled>
            <div className="title">
                <h1>{props.title}</h1>
                
            </div>
            <div className="table">
                <div className="top">
                    <div>
                    </div>
                    <Button 
                    className="btn-add" 
                    variant="contained" 
                    size="medium" 
                    disableElevation 
                    onClick={handleOpen}
                    endIcon={<IoAddCircleOutline size={22}/>}>
                        Adicionar
                    </Button>
                </div>
                
                <Table type={props.title}/>

            </div>
        </BoxStyle>
    )
}