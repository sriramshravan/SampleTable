import './App.css';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {columns, rows} from './data';

function App() {
 
  
  return (
    <Box sx={{ height: 400, width: '100%', alignContent: 'center' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Box>
  );
}

export default App;
