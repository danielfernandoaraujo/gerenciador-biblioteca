import * as React from "react";
import Typography from "@mui/material/Typography";
import { Content } from "./styled";
import { Alert, Button, FormControl, MenuItem, Select } from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { TextMaskCustom } from "./mask";
import api from "../../../services/api";

export default function AlunoModal({ childToParent }) {
//Função para adicionar 
const handleAdd = async (e) => {
    e.preventDefault();
    try {
      if (Nome && Turma && Email !== "") {
        await api.post('/alunos', {
          nome: Nome,
          turma: Turma,
          email: Email,
          telefone: Telefone
        })
        childToParent(false);
      } else {
        setErro(true);
      }
    } catch (err) {
      alert(err);
    }
  };
//Valor da mascara do input telefone
  const [values, setValues] = React.useState({
    textmask: "(79) 9",
    numberformat: "1320",
});
//Variaveis
  const [Erro, setErro] = React.useState(false);
  const [Nome, setNome] = React.useState("");
  const [Turma, setTurma] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Telefone, setTelefone] = React.useState("");
//Função para adicionar telefone
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    setTelefone(event.target.value);
  };
//Função para adicionar turma
  const Change = (event) => {
    setTurma(event.target.value);
  };
//Função para adicionar Nome
  const handleAddName = (e) => {
    setNome(e.target.value);
  };
//Função para adicionar Email
  const handleAddEmail = (e) => {
    setEmail(e.target.value);
  };
//
  return (
    <Content>
      <Typography
        id="modal-modal-title"
        variant="h5"
        component="h2"
        className="title"
      >
        Adicionar Aluno
      </Typography>
      <div className="input">
        <div className="right">
          <TextField
            sx={{ width: "100%" }}
            autoComplete="off"
            id="standard-basic"
            label="Nome"
            variant="standard"
            onChange={handleAddName}
          />
          <FormControl variant="standard" sx={{ width: "100%", marginTop: '20px' }}>
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
          <FormControl variant="standard" sx={{ }}>
            <InputLabel htmlFor="formatted-text-mask-input">
              Telefone
            </InputLabel>
            <Input
              autoComplete="off"
              value={values.textmask}
              onChange={handleChange}
              name="textmask"
              id="formatted-text-mask-input"
              inputComponent={TextMaskCustom}
            />
          </FormControl>
          <TextField
            sx={{ marginTop: '20px' }}
            autoComplete="off"
            id="standard-basic"
            label="Email"
            variant="standard"
            type={"email"}
            onChange={handleAddEmail}
          />
        </div>
      </div>
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
