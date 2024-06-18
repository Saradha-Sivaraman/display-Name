import React, { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const showFullName = (e) => {
    e.preventDefault();
    if (firstName !== "" && lastName !== "") {
      setShow(true);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "firstName") {
      setFirstName(e.target.value);
    } else {
      setLastName(e.target.value);
    }
  };
  return (
    <div>
      <form onSubmit={showFullName}>
        <h1>Full Name Display</h1>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange} 
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {show && (
        <p>
          Full Name: {firstName} {lastName}
        </p>
      )}
    </div>
  );
};

export default App;
