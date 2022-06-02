import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CellAction } from "./styled";
import { Box, Button, ButtonGroup, createTheme, Modal, ThemeProvider } from "@mui/material";
import { columns, rows } from "./info.js";
import api from "../../../services/api";
import { ModalStyled } from "../../modalUser/styled";
import AlunoModalUpdate from "../../modalAtualizar/Alunos";


export default function LivroTable() {
  //Abrir modal de update

  const [data, setData] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = (id) =>{
    setOpen(true)
    setData(id);
  } ;
  const handleClose = () => setOpen(false);

   //Criar tema para trocar a cor dos botões

   const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#2154bf",
        darker: "#053e85",
      },
      secondary: {
        main: "#ce0c4b",
        contrastText: "#fff",
      },
    },
  });

  //Estilo do Modal

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

  //Coluna de Ações

  const actionColumn = [
    {
      field: "actions",
      headerName: "Ações",
      width: 230,
      renderCell: (params) => {
        return (
          <CellAction>
            <ThemeProvider theme={theme}>
              <ButtonGroup disableElevation variant="outlined">
                <Button 
                color="primary" 
                style={{ fontWeight: "bold" }}
                //onClick={() => handleOpen(params.row.id)}
                >
                  Editar
                </Button>
                <Button 
                color="secondary" 
                style={{ fontWeight: "bold" }}
                // onClick={() =>handleDelete(params.row.id)}
                >
                  Excluir
                </Button>
              </ButtonGroup>
            </ThemeProvider>
          </CellAction>
        );
      },
    },
  ];

  return (
    <div style={{ height: 500, width: "auto" }}>
  
      <ModalStyled>
          <Modal
            //open={open}
            //onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="box">
              {/* <AlunoModalUpdate parentToChild={data} /> */}
            </Box>
        </Modal>
      </ModalStyled>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
