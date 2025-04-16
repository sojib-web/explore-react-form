// @ts-nocheck
import React, { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Brother = () => {
  const [money, setMoney] = use(MoneyContext);
  return (
    <div>
      <h1>Hi, I'm Brother!</h1>
      <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
    </div>
  );
};

export default Brother;
