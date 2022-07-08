import { BoxStyle } from "../styled";
import Button from "@mui/material/Button";
import { IoAddCircleOutline } from "react-icons/io5";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ModalStyled } from "../styled";
import EmprestimoTable from "../../tabelas/Emprestimos/index.js";
import EmprestimoModal from "../../modalAdicionar/Emprestimos";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

export function Boxtable() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const childToParent = (childdata) => {
    setOpen(childdata);
  };

  return (
    <BoxStyle>
      <ModalStyled>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="box">
            <EmprestimoModal childToParent={childToParent} />
          </Box>
        </Modal>
      </ModalStyled>
      <div className="title">
        <h1 style={{color:"purple"}}>Emprestimos</h1>
      </div>
      <div className="table">
        <div className="box">
          <div className="top">
            <div></div>
            <Button
              className="btn-add"
              variant="contained"
              size="medium"
              onClick={handleOpen}
              style={{
                fontWeight: "bold",
                backgroundColor: "#2154bf",
              }}
              endIcon={<IoAddCircleOutline size={22} />}
            >
              Adicionar
            </Button>
          </div>
        

          <EmprestimoTable className="tabela" />
        </div>
      </div>
    </BoxStyle>
  );
}
