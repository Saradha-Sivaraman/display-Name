// // Form.js
// import React, { useState } from 'react';


// function Form() {
// 	const [formData, setFormData] = useState({
// 		firstname: '',
// 		lastname: '',
// 	});
//     const [fullName,setFullName]=useState("");
// 	const [isShow, setShow] = useState(false);
	
//   	const handleChange = (e) => {
// 	const { name, value } = e.target;
// 		setFormData({
// 			...formData,
// 			[name]: value,
// 		});
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		setShow(true);
//   //setFullName("Full Name: "+formData.firstname+ " " +formData.lastname);
//   setFullName(`Full Name: ${formData.firstname} ${formData.lastname}`);

// 	};

// 	return (
// 		<div>
// 			<h1>Full Name Display</h1>
// 			<form onSubmit={handleSubmit}>
// 				<div>
// 					<label>
// 						First Name:
// 						</label>
// 					<input
//             type="text"
// 						name="firstname"
// 						value={formData.firstname}
// 						onChange={handleChange}
//            // pattern="[A-Za-z]{1,9}"  title="Only alphabets allowed"
//            required
//            	/>
// 				</div>
//         <div>
// 					<label>
// 						Last Name:
// 						</label>
// 					<input
//          		type="text"
// 						name="lastname"
// 						value={formData.lastname}
// 						onChange={handleChange}
//              //pattern="[A-Za-z]{1,9}"  title="Only alphabets allowed"
//              required
// 					/>
				
// 				</div>
// 		     <button 
// 					type="submit">Submit</button>
// 				 {isShow===true && <p>{fullName}</p>}
// 			</form>
		  
//            </div>
// 	);
// }

// export default Form;


import React, { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const showText = (e) => {
    e.preventDefault();
    if (firstName !== "" && lastName !== "") {
      setShow(true);
    }
  };

  const handleChange = (e) => {
    if (e.target.name == "firstName") {
      setFirstName(e.target.value);
    } else {
      setLastName(e.target.value);
    }
  };
  return (
    <div>
      <form onSubmit={showText}>
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
