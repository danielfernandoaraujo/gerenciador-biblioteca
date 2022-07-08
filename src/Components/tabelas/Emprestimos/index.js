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
import AlunoModalUpdate from "../../modalAtualizar/Emprestimos";
import { add, format, formatISO } from "date-fns";
import EmprestimoModalUpdate from "../../modalAtualizar/Emprestimos";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";

export default function AlunoTable() {
//Variaveis
  const [Emprestimos, setEmprestimos] = React.useState([]);
  const [Rows, setRows] = React.useState("");
//Buscar os Arrays na API
  React.useEffect(() => {
    async function loadAlunos() {
      const response = await api.get("Emprestimos");
      setEmprestimos(response.data);
    }
    if (Emprestimos !== "") {
      setRows(Emprestimos.map(createRows));
    } else {
    }
    loadAlunos();
  }, [Emprestimos]);
//Organizar os Arrays
  function createRows(elemento) {
    let dataPrazo = new Date(elemento.data_prazo);

    const formatDate = (date)=>{
      let formatted_date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
       return formatted_date;
      }

    let ArrEmprestimos = {
      id: elemento._id,
      nome_aluno: elemento.nome_aluno,
      nome_livro: elemento.nome_livro,
      data_prazo: formatDate(dataPrazo),
      data_prazo_formatada: new Date(elemento.data_prazo)
    };
    return ArrEmprestimos;
  }
//Deletar a linha
  async function handleDelete(id) {
    if (window.confirm("Deseja realmente excluir este emprestimo?")) {
      await api.delete("emprestimos/" + id);
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
  const handleClose = () => setOpen(false);
//Receber informação do componente filho
  const childToParent = (childData) => {
    setOpen(childData);
  };
//Criar tema para trocar a cor dos botões
  const themeAction = createTheme({
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
  //Criar tema para trocar a cor dos botões de Status
  const themeStatus = createTheme({
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
            <ThemeProvider theme={themeAction}>
              <ButtonGroup disableElevation variant="outlined" size="large">
                <Button
                  color="primary"
                  style={{ fontWeight: "bold" }}
                  variant="contained"
                  onClick={() => handleOpen(params.row.id)}
                >
                 <AiTwotoneEdit /> 
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
  //Coluna de Ações
  const statusColumn = [
    {
      field: "status",
      headerName: "Situação",
      width: 130,
      renderCell: (params) => {
        let dataAtual = new Date();
        return (
          <CellAction style={{alignItens: "center"}}>
            <ThemeProvider theme={themeStatus}>
              <ButtonGroup disableElevation variant="outlined">
              { params.row.data_prazo_formatada > dataAtual ? 
              <Button
                  color="success"
                  style={{ fontWeight: "bold" }}
                  variant="contained"
                >
                  em curso
                </Button> 
                :
                <Button
                  color="warning"
                  style={{ fontWeight: "bold" }}
                  variant="contained"
                >
                  Pendente
                </Button>}
              </ButtonGroup>
            </ThemeProvider>
          </CellAction>
        );
      },
    },
  ];
  return (
    <div style={{ height: 500, width: 1000, fontWeight: 'bold' }}>
      <ModalStyled>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="box">
            <EmprestimoModalUpdate
              parentToChild={data}
              childToParent={childToParent}
            />
          </Box>
        </Modal>
      </ModalStyled>
      <DataGrid
        rows={Rows}
        columns={columns.concat(statusColumn, actionColumn)}
        pageSize={50}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
