import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CellAction } from "./styled";
import {
  Box,
  Button,
  ButtonGroup,
  Skeleton,
  createTheme,
  Modal,
  ThemeProvider,
  CircularProgress,
} from "@mui/material";
import { columns } from "./info.js";
import api from "../../../services/api";
import { ModalStyled } from "../../modalAviso/styled";
import AlunoModalUpdate from "../../modalAtualizar/Alunos";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";

export default function AlunoTable() {
//Variaveis
  const [Alunos, setAlunos] = React.useState([]);
  const [Rows, setRows] = React.useState("");
//Buscar os Arrays na API
  React.useEffect(() => {
    async function loadAlunos() {
      const response = await api.get("Alunos");
      setAlunos(response.data);
    }
    if (Alunos !== "") {
      setRows(Alunos.map(createRows));
    } else {
    }
    console.log(Alunos);
    loadAlunos();
  }, [Alunos]);
//Organizar os Arrays
  function createRows(elemento) {
    let ArrAlunos = {
      id: elemento._id,
      turma: elemento.turma,
      nome: elemento.nome,
      telefone: elemento.telefone,
      email: elemento.email,
    };
    return ArrAlunos;
  }
//Deletar a linha
  async function handleDelete(id) {
    if (window.confirm("Deseja realmente excluir este usuário?")) {
      await api.delete("alunos/" + id);
    }
  }
//Abrir modal de update
  const [data, setData] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = (id) => {
    setOpen(true);
    setData(id);
  };
//Fechar modal de update
  const handleClose = () => alert('false');
//Receber informação do componente filho
  const childToParent = (childData) => {
    setOpen(childData);
  };
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
      width: 200,
      type: 'number',
      renderCell: (params) => {
        return (
          <CellAction>
            <ThemeProvider theme={theme}>
              <ButtonGroup disableElevation variant="outlined" size="large">
                <Button
                  color="primary"
                  style={{ fontWeight: "bold" }}
                  variant="contained"
                  onClick={() => handleOpen(params.row.id)}
                >
                  <AiTwotoneEdit/>
                </Button>
                <Button
                  color="secondary"
                  style={{ fontWeight: "bold" }}
                  variant="contained"
                  onClick={() => handleDelete(params.row.id)}
                >
                 <AiTwotoneDelete/>
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
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="box">
            <AlunoModalUpdate
              parentToChild={data}
              childToParent={childToParent}
            />
          </Box>
        </Modal>
      </ModalStyled>
      <DataGrid
        rows={Rows}
        columns={columns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
