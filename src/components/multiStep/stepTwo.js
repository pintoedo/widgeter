import React from 'react';

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
      />
    </div>
  );
};

export default StepTwo;
