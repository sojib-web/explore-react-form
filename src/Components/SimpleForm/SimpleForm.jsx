import React from "react";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", e.target.name.value);
    console.log("Form email", e.target.email.value);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" />
        <br />

        <input type="submit" value="submit" />
        <br />
        <input type="email" name="email" placeholder="YOur Email" />
      </form>
    </div>
  );
};

export default SimpleForm;
