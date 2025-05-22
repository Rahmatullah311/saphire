import React from 'react'

const Paper = React.lazy(() => import ('@mui/material/Paper'))
import {DataGrid} from '@mui/x-data-grid/DataGrid'
import { useGetProductsQuery } from '../productSlice'

const ProductsTable = () => {
  const {data, isLoading, isError, error} = useGetProductsQuery()
  console.log(data)
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 10,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 40,
    },
    {
      field: 'demoField1',
      headerName: 'Demo Field 0',
      width: 50,
    },
    {
      field: 'demofield1',
      headerName: 'Demo Field 1',
      width: 60,
    },
  ]
  return (
    <div>
      <Paper sx={{minHeight: '100vh', minWidth: '100%', marginY: 5}}>
      <DataGrid columns={columns} />
      </Paper>
    </div>
  )
}

export default ProductsTable
