import {
  Button,
  ButtonGroup,
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { columns, rows } from "./info";
import { Content } from "./styled";
import { DataGrid } from "@mui/x-data-grid";
import { IoAddCircleOutline } from "react-icons/io5";
import { CellAction } from "../../tabelas/Alunos/styled";
import { AiTwotoneDelete } from "react-icons/ai";
import api from "../../../services/api";
import { useEffect, useState } from "react";

export function TurmaModal() {
//Buscar informação na API
  //Variaveis
  const [Turma, setTurma] = useState([]);
  const [Rows, setRows] = useState("");
//Buscar os Arrays na API
  useEffect(() => {
    async function loadTurma() {
      const response = await api.get("Turma");
      setTurma(response.data);
    }
    if (Turma !== "") {
      setRows(Turma.map(createRows));
    } else {
    }
    console.log(Rows);
    loadTurma();
  });
//Organizar os Arrays
  function createRows(elemento) {
    let ArrTurma = {
      id: elemento._id,
      turma_aluno: elemento.turma_aluno
    };
    return ArrTurma;
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
      width: 140,
      type: 'number',
      renderCell: (params) => {
        return (
          <CellAction>
            <ThemeProvider theme={theme}>
              <ButtonGroup disableElevation variant="outlined" size="large">
                <Button
                  color="secondary"
                  style={{ fontWeight: "bold", width: '100%' }}
                  variant="contained"
                  //onClick={() => handleDelete(params.row.id)}
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
    <Content>
      <Typography
        id="modal-modal-title"
        variant="h5"
        component="h2"
        className="title"
      >
        Adicionar Turma
      </Typography>
      <div className="main">
        <div className="add">
          <FormControl
            variant="standard"
            sx={{ width: "80%", marginRight: "10px" }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Turma
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Turma"
            >
              <MenuItem value="">
                <em>Nenhuma</em>
              </MenuItem>
              <MenuItem value={"1º"}>1º</MenuItem>
              <MenuItem value={"2º"}>2º</MenuItem>
              <MenuItem value={"3º"}>3º</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="standard-basic"
            label="Sala"
            variant="standard"
            autoComplete="off"
          />
          <Button
            variant="contained"
            disableElevation
            sx={{ marginLeft: "5px" }}
          >
            <IoAddCircleOutline size={20} />
          </Button>
        </div>
        <div className="list" style={{ height: 400, width: 270 }}>
          <DataGrid
            rows={Rows}
            columns={columns.concat(actionColumn)}
            pageSize={20}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    </Content>
  );
}
