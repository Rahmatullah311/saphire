import React from "react";
import { useGetProductsQuery } from "../productSlice";
const TableSkeleton = React.lazy(
  () => import("../../../skeleton/TableSkeleton")
);
const ProductsTable = React.lazy(() => import ('../components/ProductsTable'))

const ProductsList = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();
  return (
    <div>
      {isLoading ? <TableSkeleton /> : <ProductsTable/>}
    </div>
  );
};

export default ProductsList;
