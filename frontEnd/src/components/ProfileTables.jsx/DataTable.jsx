import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'name', headerName: 'Name', width: 600 },
  { field: 'gender', headerName: 'Gender', width: 600 },
  { field: 'phone', headerName: 'Phone', width: 600 }
]

const DataTable = () => {

  const [tableData, setTableData] = useState([])

  const [rows, setRows] = useState(tableData);
  const [deletedRows, setDeletedRows] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/a32a9a80-0f36-4a3c-b9b2-f71abf5d42b2")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData);

  return (
    <div className='container mt-5'>
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={12}
        checkboxSelection
        onSelectionModelChange={({ selectionModel }) => {
          const rowIds = selectionModel.map(rowId => parseInt(String(rowId), 10));
          const rowsToDelete = tableData.filter(row => rowIds.includes(row.id));
          setDeletedRows(rowsToDelete);
          console.log(deletedRows);
        }}
      />
    </div>
    </div>
  )
}

export default DataTable