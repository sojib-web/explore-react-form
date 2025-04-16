import React, { useState } from "react";

const ControlledField = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  const handlePasswordOnChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 6) {
      setError("Password must be at least 6 characters long");
    } else {
      setError("");
    }
  };

  const handleEmailOnChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          onChange={handleNameChange}
          value={name}
          placeholder="Name"
        />
        <br />
        <input
          type="email"
          onChange={handleEmailOnChange}
          value={email}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          onChange={handlePasswordOnChange}
          value={password}
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
