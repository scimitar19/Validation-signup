import React, { useState } from "react";

const BasicForm = (props) => {
  const [enteredFirstName, setFirstName] = useState("");
  const [firstNameTouched, setFirstNameTouched] = useState(false);

  const [enteredLastName, setLastName] = useState("");
  const [enteredEmail, setEmail] = useState("");

  const [formValidation, setFormvalidation] = useState(false);

  ////    FIRST NAME HANDLER //////
  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);

    if (event.target.value.trim() !== "") setFirstNameTouched(false);
  };

  const firstNameBlurHandler = () => {
    if (enteredFirstName === "") setFirstNameTouched(true);
  };

  ////    FIRST NAME HANDLER //////
  ////////  SUBMIT FORM
  const submitHandler = (event) => {
    event.preventDefault();

    setFirstName("");
    setFirstNameTouched(false);
  };
  const firstNameHasError = firstNameTouched || !enteredFirstName === "";

  const nameFormControl = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameFormControl}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            value={enteredFirstName}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className={"error-text"}>Please enter valid name</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
