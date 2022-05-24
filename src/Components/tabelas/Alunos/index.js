import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nome', headerName: 'Nome', width: 130 },
  { field: 'turma', headerName: 'Turma', width: 130 },
  {
    field: 'telefone',
    headerName: 'Telefone',
    width: 130,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 160,
  },
];

const rows = [
  { id: 1, turma: 'Snow', nome: 'Jon', telefone: 35, email:'exemple@gmail.com'},
  { id: 2, turma: 'Lannister', nome: 'Cersei', telefone: 42, email:'exemple@gmail.com' },
  { id: 3, turma: 'Lannister', nome: 'Jaime', telefone: 45 , email:'exemple@gmail.com'},
  { id: 4, turma: 'Stark', nome: 'Arya', telefone: 16, email:'exemple@gmail.com' },
  { id: 5, turma: 'Targaryen', nome: 'Daenerys', telefone: 56 , email:'exemple@gmail.com'},
  { id: 6, turma: 'Melisandre', nome: null, telefone: 150, email:'exemple@gmail.com' },
  { id: 7, turma: 'Clifford', nome: 'Ferrara', telefone: 44 , email:'exemple@gmail.com'},
  { id: 8, turma: 'Frances', nome: 'Rossini', telefone: 36 , email:'exemple@gmail.com'},
  { id: 9, turma: 'Roxie', nome: 'Harvey', telefone: 65 , email:'exemple@gmail.com'},
];

export default function AlunoTable() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}