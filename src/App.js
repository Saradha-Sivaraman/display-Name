// Form.js
import React, { useState } from 'react';


function Form() {
	const [formData, setFormData] = useState({
		firstname: '',
		lastname: '',
	});
    const [fullName,setFullName]=useState("");
  	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
  setFullName("Full Name: "+formData.firstname+ " " +formData.lastname);

	};

	return (
		<div>
			<h1>Full Name Display</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>
						First Name:
						</label>
					<input
            type="text"
						name="firstname"
						value={formData.firstname}
						onChange={handleChange}
           // pattern="[A-Za-z]{1,9}"  title="Only alphabets allowed"
           required
           	/>
				</div>
        <div>
					<label>
						Last Name:
						</label>
					<input
         		type="text"
						name="lastname"
						value={formData.lastname}
						onChange={handleChange}
             //pattern="[A-Za-z]{1,9}"  title="Only alphabets allowed"
             required
					/>
				
				</div>
		     <button 
					type="submit">Submit</button>
           <p>{fullName}</p>
			</form>
		</div>
	);
}

export default Form;
