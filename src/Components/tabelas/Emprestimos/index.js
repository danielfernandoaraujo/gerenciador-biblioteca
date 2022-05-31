import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CellAction } from "./styled";
import { Button } from "@mui/material";
import { columns, rows } from "./info";

export default function EmprestimoTable() {
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
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
