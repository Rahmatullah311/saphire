import React from "react";
import ProductHome from "./pages/ProductHome";
import ProductsList from "./pages/ProductsList";
import ProductNew from "./pages/ProductNew";



const ProductRoutes = [
  {
    path: "/products",
    element: <ProductHome />
  },
  {
    path: "/products/list",
    element: <ProductsList />
  },
  {
    path: "/products/new",
    element: <ProductNew />
  },
]


export default ProductRoutes