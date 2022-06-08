import * as React from "react";
import Typography from "@mui/material/Typography";
import { Content } from "./styled";
import {
  Alert,
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
      if (Nome || Turma || Email !== "") {
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
  const [Erro, setErro] = React.useState(false);
  const [Nome, setNome] = React.useState("");
  const [Turma, setTurma] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Telefone, setTelefone] = React.useState("");
  const [idAluno, setIdAluno] = React.useState(parentToChild);
//Receber valores para completar os inputs
  React.useEffect(() => {
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
  const handleChange = (event) => {
    setTelefone(event.target.value);
  };

  const Change = (event) => {
    setTurma(event.target.value);
  };

  //Pegar valor de Nome
  const handleAddName = (e) => {
    setNome(e.target.value);
  };

  //Pegar valor de Email
  const handleAddEmail = (e) => {
    setEmail(e.target.value);
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
            <FormControl variant="standard" sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-standard-label">
                Turma
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={Turma}
                onChange={Change}
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
          </div>
          <div className="left">
            <FormControl variant="standard" sx={{ marginBottom: "9px" }}>
              <InputLabel htmlFor="formatted-text-mask-input">
                Telefone
              </InputLabel>
              <Input
                autoComplete="off"
                value={Telefone}
                onChange={handleChange}
                name="textmask"
                id="formatted-text-mask-input"
                inputComponent={TextMaskCustom}
              />
            </FormControl>
            <TextField
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
