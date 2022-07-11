import {useState, useEffect} from "react";
import Typography from "@mui/material/Typography";
import { Content } from "./styled";
import { Alert, Autocomplete, Button, FormControl, MenuItem, Select } from "@mui/material";
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
        await api.post("/alunos", {
          nome: Nome,
          turma: Turma,
          email: Email,
          telefone: Telefone,
        });
        childToParent(false);
      } else {
        setErro(true);
      }
    } catch (err) {
      alert(err);
    }
  };
  //Valor da mascara do input telefone
  const [values, setValues] = useState({
    numberformat: "1320",
  });
  //Variaveis para adicionar
  const [Erro, setErro] = useState(false);
  const [Nome, setNome] = useState("");
  const [Email, setEmail] = useState("");
  const [Telefone, setTelefone] = useState("");
  //Função para adicionar telefone
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    setTelefone(event.target.value);
  };
  //Função para adicionar Nome
  const handleAddName = (e) => {
    setNome(e.target.value);
  };
  //Função para adicionar Email
  const handleAddEmail = (e) => {
    setEmail(e.target.value);
  };
  //Variaveis para o autocomplete
  const [TurmaRows, setTurmaRows] = useState([]);
  const [TurmaArray, setTurmaArray] = useState([]);
  const [Turma, setTurma] = useState([]);
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
  const options = TurmaRows.map((option) => {
    const firstLetter = option.turma[0] + option.turma[1] ;
    return {
      firstLetter: firstLetter,
      ...option,
    };
  });

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
           <Autocomplete
            style={{ width: "100%",  marginTop: "20px"  }}
            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.turma}
            inputValue={Turma}
            onInputChange={(event, newInputValue) => {
              setTurma(newInputValue);
            }}
            id="disable-close-on-select"
            clearOnEscape
            renderInput={(params) => (
            <TextField {...params} label="Turma" variant="standard" />
            )}
        />
        </div>
        <div className="left">
          <FormControl variant="standard" sx={{}}>
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
            sx={{ marginTop: "20px" }}
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
