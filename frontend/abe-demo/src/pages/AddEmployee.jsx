import React from "react";
import { useState } from "react";

function AddEmployee(props) {
    //create a state to store the form data
    const [formData, setFormData] = useState({ });








  //write a function to handel the form submit
  const handelSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {/* Display the return message in here */}

      <h1>Add employee</h1>
      <form onSubmit={handelSubmit}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="text"
          id="email"
          name="email"
          value={emailAddress}
          onChange={(event) => setEmailAddress(event.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddEmployee;
