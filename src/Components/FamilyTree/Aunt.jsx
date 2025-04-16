import React from "react";
import Cousin from "./Cousin";

const Aunt = () => {
  return (
    <div>
      <h1>Aunt</h1>
      <section className="flex">
        <Cousin name="Bristy"></Cousin>
        <Cousin name="Siyam"></Cousin>
      </section>
    </div>
  );
};

export default Aunt;
