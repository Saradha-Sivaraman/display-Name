import React, { useState } from "react";
import './App.css';

function App() {
 
  
const [lastname,setLastName]=useState("");
const [firstname,setFirstName]=useState("");
const [fullName,setFullName]=useState("");

  const handleFirstNameChange = (event) => {

   setFirstName(event.target.value); 
  
   
  };

  const handleLastNameChange = (event) => {

   
    setLastName(event.target.value); 
    
   };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFullName("Full Name: "+firstname+lastname);
   
    };
  return (
    <form onSubmit={handleSubmit}>
       <h1> Full Name Display</h1>
    <label>
      First Name:
      <input type="text" name="firstname" value={firstname} onChange={handleFirstNameChange} />
    </label>
    <br></br>
    <label>
      Last Name:
      <input type="text" name="lastname" value={lastname} onChange={handleLastNameChange} />
    </label>
    <br></br>
    <input type="submit" value="Submit" />
    <p>{fullName}</p>
  </form>
  );
}

export default App;
