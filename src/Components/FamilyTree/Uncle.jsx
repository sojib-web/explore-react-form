import React from "react";
import Cousin from "./Cousin";

const Uncle = () => {
  return (
    <div>
      <h1>Uncle</h1>
      <section className="flex">
        <Cousin name="bolod ali"></Cousin>
        <Cousin name="Cholimodi "></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
