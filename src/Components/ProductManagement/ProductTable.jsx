import React from "react";

const ProductTable = ({ products }) => {
  return (
    <div>
      <h1>Product Table</h1>
      <h3>Products : {products.length}</h3>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{/* Add something here if needed */}</td>
              <td>{/* Maybe a delete/edit button */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
