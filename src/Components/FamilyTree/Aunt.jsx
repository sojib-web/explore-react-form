// @ts-nocheck
import React, { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./FamilyTree";

const Aunt = ({ asset }) => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h1>Aunt</h1>
      <section className="flex">
        <Cousin asset={asset} name="Bristy"></Cousin>
        <Cousin name="Siyam"></Cousin>

        <button onClick={() => setMoney(money + 5000)}>Add 5000 tk </button>
      </section>
    </div>
  );
};

export default Aunt;
