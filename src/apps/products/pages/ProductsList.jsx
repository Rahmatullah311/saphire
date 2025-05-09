import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../productSlice'
import TableSkeleton from '../../../skeleton/TableSkeleton'
// const TableSkeleton = React.lazy(() => import('../../../skeleton/TableSkeleton'))
const ProductsList = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.product.data)
  const error = useSelector((state) => state.product.error)
  const isLoading = useSelector((state) => state.product.isLoading)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <div>
    {
      isLoading ? (
        <TableSkeleton />
      ):(
      <p>this is is the products list page</p>
      )
    }
    </div>
  )
}

export default ProductsList
