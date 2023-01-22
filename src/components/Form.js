import React, { useState } from "react";


function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    // use `checked` property of checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }



  return (
    <form>
      <input 
        type="text"
         name="firstName"
        value={formData.firstName}
        onchange={handleFirstNameChange}/>
      <input 
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleLastNameChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
