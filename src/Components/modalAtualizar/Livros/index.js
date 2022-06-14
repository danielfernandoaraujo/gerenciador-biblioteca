import { Alert, Button, LinearProgress, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Content } from "./styled";

export default function LivroModalUpdate({ parentToChild, childToParent }){
// Variaveis dos inputs
const [Erro, setErro] = useState(false);
const [Codigo, setCodigo] = useState("");
const [Titulo, setTitulo] = useState("");
const [Estoque, setEstoque] = useState(""); 
const [idLivro, setIdLivro] = useState(parentToChild);
// Função de adicionar
const handleAdd = async (e) => {
  e.preventDefault();
  try {
    if (Codigo && Titulo && Estoque !== "" &&
      Estoque && Codigo !== Number) {
      await api.put('/livros', {
          _id: idLivro,
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
//Receber valores para completar os inputs
useEffect(() => {
    async function getUsuario() {
      var response = await api.get("/livros.detalhes/" + idLivro);
      setCodigo(response.data.codigo_livro);
      setTitulo(response.data.titulo_livro);
      setEstoque(response.data.estoque_livro);
    }
    getUsuario();
  }, [idLivro]);
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
      Atualizar Livro
    </Typography>
   { Codigo || Titulo || Estoque !== "" ?
    <div className="input">
      <div className="rigth">
        <TextField
          style={{ width: "95%" }}
          autoComplete="off"
          id="standard-basic"
          label="Codigo"
          variant="standard"
          type="number"
          value={Codigo}
          onChange={handleAddCodigo}
        />
        <TextField
          style={{ width: "95%", marginTop: '20px'  }}
          autoComplete="off"
          id="standard-basic"
          label="Estoque"
          variant="standard"
          type="number"
          value={Estoque}
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
          value={Titulo}
          onChange={handleAddTitulo}
        />
      </div>
    </div>
    : <LinearProgress style={{ marginTop: "2rem" }} /> }
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