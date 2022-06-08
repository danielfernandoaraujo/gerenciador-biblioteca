import { Alert, Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import api from "../../../services/api";
import { Content } from "./styled";

export default function LivroModal({ childToParent }) {
// Variaveis dos inputs
  const [Erro, setErro] = useState(false);
  const [Codigo, setCodigo] = useState();
  const [Titulo, setTitulo] = useState();
  const [Estoque, setEstoque] = useState();
// Função de adicionar
const handleAdd = async (e) => {
    e.preventDefault();
    try {
      if (Codigo || Titulo || Estoque !== "" &&
        Estoque || Codigo !== Number) {
        await api.post('/Livros', {
            codigo_livro: Codigo,
            titulo_livro: Titulo,
            estoque_livro: Estoque,
        })
        childToParent(false);
      } else {
        setErro(true);
      }
    } catch (err) {
      alert(err); 
    }
  };
// Função para adicionar Codigo
  const handleAddCodigo = (e) => {
    setCodigo(e.target.value);
  };
// Função para adicionar Titulo
  const handleAddTitulo = (e) => {
    setTitulo(e.target.value);
  };
// Função para adicionar Estoque
  const handleAddEstoque = (e) => {
    setEstoque(e.target.value);
  };

  return (
    <Content>
      <Typography
        id="modal-modal-title"
        variant="h5"
        component="h2"
        className="title"
      >
        Adicionar Livro
      </Typography>
      <div className="input">
        <div className="rigth">
          <TextField
            style={{ width: "95%" }}
            autoComplete="off"
            id="standard-basic"
            label="Codigo"
            variant="standard"
            type="number"
            onChange={handleAddCodigo}
          />
          <TextField
            style={{ width: "95%" }}
            autoComplete="off"
            id="standard-basic"
            label="Estoque"
            variant="standard"
            type="number"
            onChange={handleAddEstoque}
          />
        </div>
        <div className="left">
          <TextField
            autoComplete="off"
            id="standard-basic"
            label="Título"
            variant="standard"
            type="text"
            onChange={handleAddTitulo}
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
            Algum campo não foi preenchido ou o valor está incorreto!
          </Alert>
        )}
      </div>
    </Content>
  );
}
