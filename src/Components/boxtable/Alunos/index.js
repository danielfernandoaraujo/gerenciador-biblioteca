import { BoxStyle } from "../styled";
import Button from "@mui/material/Button";
import { IoAddCircleOutline } from "react-icons/io5";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ModalStyled } from "../styled";
import AlunoTable from "../../tabelas/Alunos/index.js";
import AlunoModal from "../../modalAdicionar/Alunos/index.js";

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
            <AlunoModal childToParent={childToParent} />
          </Box>
        </Modal>
      </ModalStyled>
      <div className="title">
        <h1>Alunos</h1>
      </div>
      <div className="table">
        <div className="box">
          <div className="top">
            <div></div>
            <Button
              className="btn-add"
              variant="contained"
              size="medium"
              disableElevation
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
        

          <AlunoTable className="tabela" />
        </div>
      </div>
    </BoxStyle>
  );
}
