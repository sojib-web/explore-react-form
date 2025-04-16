// @ts-nocheck
import React, { useRef } from "react";

const UnControlledField = () => {
  const emailRef = useRef("");
  const PasswordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(PasswordRef.current.value);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" ref={emailRef} name="" id="" />
        <br />

        <input type="password" ref={PasswordRef} name="" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UnControlledField;
