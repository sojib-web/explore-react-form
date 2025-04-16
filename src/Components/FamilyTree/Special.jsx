import React, { useContext } from "react";
import { AssetContext } from "./FamilyTree";

const Special = ({ name, asset }) => {
  const newAsset = useContext(AssetContext);
  return (
    <div>
      <h1>Special: {name}</h1>
      <p>Asset: {asset}</p>

      <p>New Asset : {newAsset}</p>
    </div>
  );
};

export default Special;
