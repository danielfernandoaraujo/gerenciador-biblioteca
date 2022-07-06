import {
  Alert,
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
    loadTurma();
  }, [Turma]);
  //Organizar os Arrays
  function createRows(elemento) {
    let ArrTurma = {
      id: elemento._id,
      turma_aluno: elemento.turma_aluno,
    };
    return ArrTurma;
  }
  //Função para adicionar
  //Variaveis
  const [Erro, setErro] = useState(false);
  const [Success, setSuccess] = useState(false);
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      if (TurmaInput && Sala && TurmaFormatada !== "") {
        await api.post("/turma", {
          turma_aluno: TurmaFormatada,
        });
        setSuccess(true);
        setErro(false);
      } else {
        setErro(true);
        setSuccess(false);
      }
    } catch (err) {
      alert(err);
    }
  };
  //Função para deletar
  async function handleDelete(id) {
    if (window.confirm("Deseja realmente excluir este usuário?")) {
      await api.delete("turma/" + id);
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
  //Estilo do input
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: "auto",
      },
    },
  };
  //Informação dos inputs
  const [TurmaInput, setTurmaInput] = useState();
  const [Sala, setSala] = useState();
  const TurmaFormatada = TurmaInput + Sala;
  //Adicionar Turma
  function handleTurma(e) {
    setTurmaInput(e.target.value);
  }
  //Adicionar Sala
  function handleSala(e) {
    setSala(e.target.value);
  }
  //Coluna de Ações
  const actionColumn = [
    {
      field: "actions",
      headerName: "Ações",
      width: 140,
      type: "number",
      renderCell: (params) => {
        return (
          <CellAction>
            <ThemeProvider theme={theme}>
              <ButtonGroup disableElevation variant="outlined" size="large">
                <Button
                  color="secondary"
                  style={{ fontWeight: "bold", width: "100%" }}
                  variant="contained"
                  onClick={() => handleDelete(params.row.id)}
                >
                  <AiTwotoneDelete />
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
              value={TurmaInput}
              onChange={handleTurma}
            >
              <MenuItem value="">
                <em>Nenhuma</em>
              </MenuItem>
              <MenuItem value={"1º"}>1º</MenuItem>
              <MenuItem value={"2º"}>2º</MenuItem>
              <MenuItem value={"3º"}>3º</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ width: "80%", marginRight: "10px" }}
          >
            <InputLabel id="demo-simple-select-standard-label">Sala</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Turma"
              value={Sala}
              onChange={handleSala}
              MenuProps={MenuProps}
            >
              <MenuItem value="">
                <em>Nenhuma</em>
              </MenuItem>
              <MenuItem value={"A"}>A</MenuItem>
              <MenuItem value={"B"}>B</MenuItem>
              <MenuItem value={"C"}>C</MenuItem>
              <MenuItem value={"D"}>D</MenuItem>
              <MenuItem value={"E"}>E</MenuItem>
              <MenuItem value={"F"}>F</MenuItem>
              <MenuItem value={"G"}>G</MenuItem>
              <MenuItem value={"H"}>H</MenuItem>
              <MenuItem value={"I"}>I</MenuItem>
              <MenuItem value={"J"}>J</MenuItem>
              <MenuItem value={"K"}>K</MenuItem>
              <MenuItem value={"L"}>L</MenuItem>
              <MenuItem value={"M"}>M</MenuItem>
              <MenuItem value={"N"}>N</MenuItem>
              <MenuItem value={"O"}>O</MenuItem>
              <MenuItem value={"P"}>P</MenuItem>
              <MenuItem value={"Q"}>Q</MenuItem>
              <MenuItem value={"R"}>R</MenuItem>
              <MenuItem value={"S"}>S</MenuItem>
              <MenuItem value={"T"}>T</MenuItem>
              <MenuItem value={"U"}>U</MenuItem>
              <MenuItem value={"V"}>V</MenuItem>
              <MenuItem value={"X"}>X</MenuItem>
              <MenuItem value={"Y"}>Y</MenuItem>
              <MenuItem value={"Z"}>Z</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            disableElevation
            sx={{ marginLeft: "5px" }}
            onClick={handleAdd}
          >
            <IoAddCircleOutline size={20} />
          </Button>
        </div>
        <div className="list" style={{ height: 400, width: 270 }}>
          <DataGrid
            rows={Rows}
            columns={columns.concat(actionColumn)}
            pageSize={50}
            rowsPerPageOptions={[5]}
            initialState={{
              sorting: {
                sortModel: [{ field: "turma_aluno", sort: "asc" }],
              },
            }}
          />
        </div>
      </div>
      <div className="msg">
        {Erro && (
          <Alert severity="error" className="alert">
            Algum campo não foi preenchido!
          </Alert>
        )}
        {Success && (
          <Alert severity="success" className="alert">
            Turma adicionada com sucesso! :)
          </Alert>
        )}
      </div>
    </Content>
  );
}
