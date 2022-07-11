import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Content } from "./styled";
import {
  Alert,
  Autocomplete,
  Button,
  FormControl,
  LinearProgress,
  MenuItem,
  Select,
} from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { TextMaskCustom } from "./mask";
import api from "../../../services/api";

export default function AlunoModalUpdate({ parentToChild, childToParent }) {
  const data = false;

  //Adicionar um documento

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      if (Nome && Turma && Email !== "") {
        await api.put("/alunos", {
          _id: idAluno,
          nome: Nome,
          turma: Turma,
          email: Email,
          telefone: Telefone,
        });
        childToParent(data);
      } else {
        setErro(true);
      }
    } catch (err) {
      alert(err);
    }
  };
  //Variaveis
  const [Erro, setErro] = useState(false);
  const [Nome, setNome] = useState("");
  const [Email, setEmail] = useState("");
  const [Telefone, setTelefone] = useState("");
  const [idAluno, setIdAluno] = useState(parentToChild);
  //Receber valores para completar os inputs
  useEffect(() => {
    async function getUsuario() {
      var response = await api.get("/alunos.detalhes/" + idAluno);
      setNome(response.data.nome);
      setTurma(response.data.turma);
      setEmail(response.data.email);
      setTelefone(response.data.telefone);
    }
    getUsuario();
  }, [idAluno]);
  //Pegar o valor de turma
  const handleAddTelefone = (event) => {
    setTelefone(event.target.value);
  };
  //Pegar valor de Nome
  const handleAddName = (e) => {
    setNome(e.target.value);
  };
  //Pegar valor de Email
  const handleAddEmail = (e) => {
    setEmail(e.target.value);
  };
  //Pegar valor da Turma
  const handleAddTurma = (e) => {
    setTurma(e.target.value);
  };
  //Variaveis para o autocomplete
  const [TurmaRows, setTurmaRows] = useState([]);
  const [TurmaArray, setTurmaArray] = useState([]);
  const [Turma, setTurma] = useState();
  //Buscar o Array de Turma na API
  useEffect(() => {
    async function loadTurma() {
      const response = await api.get("Turma");
      setTurmaArray(response.data);
    }
    if (TurmaArray !== "") {
      setTurmaRows(TurmaArray.map(createRowsTurma));
    }
    loadTurma();
  }, [TurmaArray]);
  //Organizar os Arrays
  function createRowsTurma(elemento) {
    let ArrTurma = {
      id: elemento._id,
      turma: elemento.turma_aluno,
    };
    return ArrTurma;
  }
  //Mapear os Arrays e inserir nos inputs
  const listarTurma = TurmaRows.map(
    (e) =>
      <MenuItem value={e.turma}>
      <em>{e.turma}</em>
      </MenuItem>
    
  ) 
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

  return (
    <Content>
      <Typography
        id="modal-modal-title"
        variant="h5"
        component="h2"
        className="title"
      >
        Atualizar Aluno
      </Typography>
      {Nome || Email || Turma || Telefone !== "" ? (
        <div className="input">
          <div className="right">
            <TextField
              sx={{ width: "100%", marginBottom: "8px" }}
              autoComplete="off"
              id="standard-basic"
              label="Nome"
              value={Nome}
              variant="standard"
              onChange={handleAddName}
            />
            <FormControl variant="standard" sx={{ width: "100%", marginTop: "20px"}}>
              <InputLabel id="demo-simple-select-standard-label">
                Turma
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={Turma}
                onChange={handleAddTurma}
                label="Age"
                MenuProps={MenuProps}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {listarTurma}
                
              </Select>
            </FormControl>
          </div>
          <div className="left">
            <FormControl variant="standard" sx={{ marginBottom: "9px" }}>
              <InputLabel htmlFor="formatted-text-mask-input">
                Telefone
              </InputLabel>
              <Input
                autoComplete="off"
                value={Telefone}
                onChange={handleAddTelefone}
                name="textmask"
                id="formatted-text-mask-input"
                inputComponent={TextMaskCustom}
              />
            </FormControl>
            <TextField
              sx={{ marginTop: "20px" }}
              autoComplete="off"
              id="standard-basic"
              label="Email"
              value={Email}
              variant="standard"
              type={"email"}
              onChange={handleAddEmail}
            />
          </div>
        </div>
      ) : (
        <LinearProgress style={{ marginTop: "2rem" }} />
      )}
      <Button
        variant="contained"
        disableElevation
        className="btn"
        onClick={handleAdd}
      >
        Confirmar
      </Button>
      <div className="msg-erro">
        {Erro && (
          <Alert severity="error" className="alert">
            Algum campo não foi preenchido!
          </Alert>
        )}
      </div>
    </Content>
  );
}
