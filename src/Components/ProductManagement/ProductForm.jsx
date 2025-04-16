import React, { useState } from "react";

const ProductForm = ({ handleProducts }) => {
  const [error, setError] = useState("");
  const handleProductSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const price = e.target.price.value;

    console.log(name, quantity, price);

    if (name.length === 0) {
      setError("please provide a product name ");
      return;
    } else if (price.length === 0) {
      setError("please provide a product price");
      return;
    } else if (price < 0) {
      setError("price cannot be negative");
      return;
    } else if (quantity < 0) {
      setError("quantity cannot be negative");
      return;
    } else {
      setError("");
    }

    const newProduct = {
      name,
      quantity,
      price,
    };
    // console.log(newProduct);
    if (!error) {
      handleProducts(newProduct);
    }
  };
  return (
    <div>
      <h1>Product Form</h1>

      <form action="" onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="Product Name" />
        <br />
        <input type="text" name="price" placeholder="Product Price" />

        <br />
        <input type="text" name="quantity" placeholder="Product quantity" />

        <br />
        <input type="submit" value="Submit" />
      </form>

      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;
