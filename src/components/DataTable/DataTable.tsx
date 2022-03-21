import React, {useState} from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
    } from '@mui/material';
import { GameForm } from '../../components';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'game_title',
    headerName: 'Game Title',
    width: 250,
    editable: true,
  },
  {
    field: 'rating',
    headerName: 'Rating',
    width: 70,
    editable: true,
  },
  {
    field: 'date_made',
    headerName: 'Date Produced',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'creator',
    headerName: 'Creator',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 790
  },
  {
    field: 'review',
    headerName: 'Review',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 250
  },
];



export const DataTable = () => {
    let { gameData, getData } = useGetData();
    let [ open, setOpen ] = useState(false);
    let [ gridData, setData ] = useState<GridSelectionModel>()

    let handleOpen = () => {
        setOpen(true);
    }
    let handleClose = () => {
        setOpen(false);
    }

    let deleteData = async () => {
        for(let id in gridData){
            await server_calls.delete(`${gridData}`)
        }
        window.location.reload()
        
    }

    return (
      <div style={{ height: 400, width: '100%' }}>
          <h1>Video Game Inventory</h1>
        <DataGrid
          rows={gameData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={ (newSelectionModel) => {setData(newSelectionModel);}}
          {...gameData}
        />
        <Button onClick={handleOpen}>Update Game</Button>
        <Button variant='contained' color='primary' onClick={deleteData}>Delete Game</Button>
        <Dialog open={open} onClose ={handleClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>Update Game</DialogTitle>
            <DialogContent>
                <DialogContentText>Game id: {gridData}</DialogContentText>
                <GameForm id ={ `${gridData}` }/>
            </DialogContent>
            <DialogActions>
                <Button onClick = {handleClose} color='primary'>Cancel</Button>
            </DialogActions>
        </Dialog>
      </div>
    );
  }