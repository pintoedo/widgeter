import React from 'react';
import { Redirect, Route, Link } from 'react-router-dom';

const StepTwo = ({ handleFormInput, formValues }) => {
  return (
    <div>
      <label>Name</label>
      <input
        label="name"
        name="name"
        value={formValues.name}
        onChange={handleFormInput}
        required
      ></input>
    </div>
  );
};

export default StepTwo;
