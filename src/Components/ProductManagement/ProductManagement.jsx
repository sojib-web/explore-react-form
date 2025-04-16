// @ts-nocheck
import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  const handleProducts = (newProduct) => {
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
  };
  return (
    <div>
      <h1>Product Management</h1>
      <ProductForm handleProducts={handleProducts}></ProductForm>
      <ProductTable products={products}></ProductTable>
    </div>
  );
};

export default ProductManagement;
