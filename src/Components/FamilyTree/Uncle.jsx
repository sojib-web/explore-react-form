import React from "react";
import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div>
      <h1>Uncle</h1>
      <section className="flex">
        <Cousin name="bolod ali" asset={undefined}></Cousin>
        <Cousin name="Cholimodi " asset={undefined}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
