import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CellAction } from "./styled";
import { Button, ButtonGroup, createTheme, ThemeProvider } from "@mui/material";
import { columns } from "./info";
import api from "../../../services/api";

export default function AlunoTable() {
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
    if(window.confirm("Deseja realmente excluir este usuário?")) {
      await api.delete('alunos/'+id) ;
    }
  }

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

                >
                  Atualizar
                </Button>
                <Button 
                color="secondary" 
                style={{ fontWeight: "bold" }}
                onClick={() =>handleDelete(params.row.id)}
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
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={Rows}
        columns={columns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
