import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CellAction } from "./styled";
import { Box, Button, ButtonGroup, createTheme, Modal, ThemeProvider } from "@mui/material";
import { columns, rows } from "./info.js";
import api from "../../../services/api";
import { ModalStyled } from "../../modalAviso/styled";
import AlunoModalUpdate from "../../modalAtualizar/Alunos";
import LivroModalUpdate from "../../modalAtualizar/Livros";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";


export default function LivroTable() {
//variaveis
  const [Livros, setLivros] = React.useState([]);
  const [Rows, setRows] = React.useState('');
//Buscar os Arrays na API
  React.useEffect(() => {
    async function loadLivros() {
      const response = await api.get("Livros");
      setLivros(response.data);
    }
    if (Livros !== "") {
      setRows(Livros.map(createRows));
    } else {
    }
    console.log(Livros);
    loadLivros();
  }, [Livros]);
//Organizar os Arrays
  function createRows(elemento) {
    let ArrLivros = {
      id: elemento._id,
      codigo_livro: elemento.codigo_livro,
      titulo_livro: elemento.titulo_livro,
      estoque_livro: elemento.estoque_livro,
    };
    return ArrLivros;
  }
//Deletar a linha
  async function handleDelete(id) {
    if(window.confirm("Deseja realmente excluir este livro?")) {
      await api.delete('livros/'+id) ;
    }
  }
//Abrir modal de update
  const [data, setData] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = (id) =>{
    setOpen(true)
    setData(id);
  } ;
//Fechar modal de update
  const handleClose = () => setOpen(false);
//Receber informação do componente filho
  const childToParent = (childData) => {
    setOpen(childData);
  };
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
            <ThemeProvider theme={theme}>
              <ButtonGroup disableElevation variant="outlined" size="large">
                <Button 
                color="primary" 
                style={{ fontWeight: "bold" }}
                variant="contained"
                onClick={() => handleOpen(params.row.id)}
                >
                  <AiTwotoneEdit/>
                </Button>
                <Button 
                color="secondary" 
                style={{ fontWeight: "bold" }}
                variant="contained"
                onClick={() =>handleDelete(params.row.id)}
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
    <div style={{ height: 500, width: "auto" }}>
  
      <ModalStyled>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="box">
              <LivroModalUpdate 
              parentToChild={data}
              childToParent={childToParent}
              />
            </Box>
        </Modal>
      </ModalStyled>
      <DataGrid
        rows={Rows}
        columns={columns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
