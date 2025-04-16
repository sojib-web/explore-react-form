import React, { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Friend = () => {
  // @ts-ignore
  const [money] = use(MoneyContext);
  return (
    <div>
      <h1>Friend</h1>
      <p>Family got : {money}</p>
    </div>
  );
};

export default Friend;
