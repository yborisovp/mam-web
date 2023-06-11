import { useState } from "react";

import {
  DataGrid,
  GridColDef,
  ruRU,
  GridToolbarContainer,
  GridToolbarFilterButton,
  GridRowId,
  useGridApiRef,
} from "@mui/x-data-grid";
import { Button } from "react-bootstrap";

const columns: GridColDef[] = [
  { field: "name", headerName: "Пользователь", flex: 1 },
  {
    field: "isAdmin",
    headerName: "Является адмнистратором",
    type: "boolean",
    flex: 0.5,
  },
];

let dataGridRows = [
  { id: 1, name: "Ярослав Борисов", isAdmin: true },
  { id: 2, name: "Иванов Иван", isAdmin: true },
];
    
export const AdminsListView = () => {
  const [approveState, setApproveState] = useState<GridRowId[]>();

  const customToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
      </GridToolbarContainer>
    );
  };
  const onSelectedSubmitted = () => {
    dataGridRows.forEach((r) => {
      const el = approveState?.find((e) => e === r.id);
      if (el) {
        r.isAdmin = true;
      }
    });
  };

  return (
    <div className="col-lg-10 col-xl-10 col-md-12 col-sm-12 col-12 ps-0 row mx-auto">
      <DataGrid
        rows={dataGridRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        slots={{
          toolbar: customToolbar,
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={(newSelectionModel) => {
          setApproveState(newSelectionModel);
        }}
      />
      <Button
        color="primary"
        disabled={approveState === undefined || !approveState.length}
        onClick={() => onSelectedSubmitted()}
      >
        Выдать права
      </Button>
    </div>
  );
};
