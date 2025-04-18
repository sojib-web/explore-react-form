// @ts-nocheck
import React from "react";
import Myself from "./Myself";
import Sister from "./Sister";
import Brother from "./Brother";

const Dad = ({ asset }) => {
  return (
    <div>
      <h1>Hi, I'm Dad!</h1>
      <section className="flex">
        <Myself asset={asset}></Myself>
        <Sister></Sister>
        <Brother></Brother>
      </section>
    </div>
  );
};

export default Dad;
