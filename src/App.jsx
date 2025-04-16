import React from "react";
import "./App.css";
import SimpleForm from "./Components/SimpleForm/SimpleForm";
import FormAction from "./Components/FormAction/FormAction";
import ControlledField from "./Components/ControllField/ControlledField";
import UnControlledField from "./Components/UnControlledField/UnControlledField";
import HookForm from "./Components/HookForm/HookForm";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField> */}
      {/* <UnControlledField></UnControlledField> */}
      <HookForm></HookForm>
    </>
  );
}

export default App;
