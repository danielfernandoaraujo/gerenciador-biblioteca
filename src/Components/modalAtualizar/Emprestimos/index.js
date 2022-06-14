import { stringify } from "@firebase/util";
import { Alert, Autocomplete, Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { add, format, formatISO, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Content } from "./styled";




export default function EmprestimoModalUpdate({ parentToChild, childToParent }) {
  
  //Pegar o Valor das outras tabelas
    //Variaveis
    const [AlunosRows, setAlunosRows] = useState("");
    const [Alunos, setAlunos] = useState([]);
    const [LivrosRows, setLivrosRows] = useState("");
    const [Livros, setLivros] = useState([]);
    //Buscar o Array de Alunos na API
      useEffect(() => {
        async function loadAlunos() {
          const response = await api.get("Alunos");
          setAlunos(response.data);
        } 
        if (Alunos !== "") {
          setAlunosRows(Alunos.map(createRowsAlunos));
        }
        console.log(Alunos);
        loadAlunos();
      }, [Alunos]);
    //Organizar os Arrays
      function createRowsAlunos(elemento) {
        let ArrAlunos = {
          id: elemento._id,
          turma: elemento.turma,
          nome: elemento.nome,
          telefone: elemento.telefone,
          email: elemento.email,
        };
        return ArrAlunos;
      }

      //Buscar o Array de Livros na API
      useEffect(() => {
        async function loadLivros() {
          const response = await api.get("Livros");
          setLivros(response.data);
        }
        if (Livros !== "") {
          setLivrosRows(Livros.map(createRowsLivros));
        }
        console.log(Livros);
        loadLivros();
      }, [Livros]);
    //Organizar os Arrays
    function createRowsLivros(elemento) {
        let ArrLivros = {
          id: elemento._id,
          codigo_livro: elemento.codigo_livro,
          titulo_livro: elemento.titulo_livro,
          estoque_livro: elemento.estoque_livro,
        };
        return ArrLivros;
      }
    //Mapear os Arrays e inserir nos inputs
    const AlunosProps = {
        options: AlunosRows,
        getOptionLabel: (option) => option.nome,
      };
    const LivrosProps = {
        options: LivrosRows,
        getOptionLabel: (option) => option.titulo_livro,
    };
  //Inserir o valor na tabela de Emprestimos
    //Variaveis dos inputs
      const [dataDevolução, setdataDevolução] = useState('')
      const [nomeAluno, setnomeAluno] = useState('')
      const [nomeLivro, setnomeLivro] = useState('')
      const [idEmprestimos, setIdEmprestimos] = useState(parentToChild);
      const [Erro, setErro] = useState(false);
    //Função para atualizar na de emprestimos
      const handleAdd = async (e) => {
        e.preventDefault();
        try {
          if (nomeAluno.length && nomeLivro.length && dataDevolução.length !== 0) {
            await api.put('/emprestimos', {
              _id: idEmprestimos,
              nome_aluno: nomeAluno,
              nome_livro: nomeLivro,
              data_prazo: dataDevolução,
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
      var response = await api.get("/emprestimos.detalhes/" + idEmprestimos);
      setnomeAluno(response.data.nome_aluno);
      //setnomeLivro(response.data.nome_livro);
      setdataDevolução(format(add(new Date(response.data.data_prazo), {days:1}), 'yyyy-MM-dd'));
    }
    getUsuario();
  }, [idEmprestimos]);


    const [value, setValue] = useState(null);


  return (
    <Content>
    <Typography id="modal-modal-title" variant="h5" component="h2" className='title'>
                    Adicionar empréstimo
                    </Typography>
                    <div className='input'>
                        <div className='rigth'>
                             <Autocomplete
                                style={{ width: "95%" }}
                                {...AlunosProps}
                                inputValue={nomeAluno}
                                id="disable-close-on-select"
                                clearOnEscape
                                renderInput={(params) => (
                                <TextField {...params} label="Nome do Aluno" variant="standard" />
                                )}
                            />
                            <div className='data-div'>
                              <label> Data de devolução</label>
                              <input 
                              type={'date'}
                              value={dataDevolução}
                              className={'dataPicker'}
                              onChange={(e)=>{setdataDevolução(e.target.value)}}
                              />
                            </div>
                        </div>
                        <div className='left'>
                            <Autocomplete
                                style={{ width: "95%" }}
                                {...LivrosProps}
                                inputValue={nomeLivro}
                                onInputChange={(event, newInputValue) => {
                                  setnomeLivro(newInputValue);
                                }}
                                id="disable-close-on-select"
                                clearOnEscape
                                renderInput={(params) => (
                                <TextField {...params} label="Nome do Livro" variant="standard" />
                                )}
                            />
                        </div>
                    </div>
                    <Button
                    variant="contained" 
                    disableElevation 
                    className='btn'
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
