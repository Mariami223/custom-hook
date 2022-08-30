import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validateLogin";
import "./index.css";

const Form = () => {
  const { handleChange, handleSubmit, values, errors, setIsSubmit, isSubmit } =
    useForm(submit, validate);

  function submit() {
    console.log("Submitted Succesfully");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <div>
            <label>firstName</label>
          </div>
          <input
            className={`${errors.firstName && "inputError"}`}
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
        </div>
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <div>
          <div>
            <label>lastName</label>
          </div>
          <input
            className={`${errors.lastName && "inputError"}`}
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </div>
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        <div>
          <label>Email</label>
          <div>
            <input
              className={`${errors.email && "inputError"}`}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              className={`${errors.email && "inputError"}`}
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Form;
