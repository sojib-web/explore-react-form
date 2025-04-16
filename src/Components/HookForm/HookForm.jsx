import React from "react";
import UseInputField from "../../Hooks/UseInputField";

const HookForm = () => {
  const [name, nameOnChange] = UseInputField("");
  const [email, emailOnChange] = UseInputField("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit", name, email);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={name} onChange={nameOnChange} />
        <br />
        <input
          type="email"
          defaultValue={email}
          onChange={emailOnChange}
          name=""
          id=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
