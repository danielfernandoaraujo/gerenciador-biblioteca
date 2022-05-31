import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CellAction } from "./styled";
import { Button } from "@mui/material";
import { columns, rows } from "./info";
import { db } from "../../../services/fire";
import { collection, getDocs } from "firebase/firestore";
import api from "../../../services/api";



export default function AlunoTable() {

  const [Alunos, setAlunos] = React.useState([])
  const [Rows, setRows] = React.useState('')

  React.useEffect(()=> {

        async function loadAlunos(){
          const response = await api.get('Alunos')
          setAlunos(response.data)
        };
        if(Alunos != ""){
          setRows(Alunos.map(createRows))
        } else {
          
        }
        console.log(Alunos)
        loadAlunos();
        
  }, [Alunos])


  function createRows(elemento){
    let ArrAlunos = {id: elemento._id, 
      turma: elemento.turma, 
      nome: elemento.nome, 
      telefone: elemento.telefone, 
      email: elemento.email}
    return ArrAlunos
  }

  const actionColumn = [
    {
      field: "actions",
      headerName: "Ações",
      width: 250,
      renderCell: () => {
        return (
          <CellAction>
            <div className="edit-btn">
              <Button variant="outlined" color="warning">
                Editar
              </Button>
            </div>
            <div className="delete-btn">
              <Button variant="outlined" color="error">
                Deletar
              </Button>
            </div>
          </CellAction>
        );
      },
    },
  ];
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={Rows}
        columns={columns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
