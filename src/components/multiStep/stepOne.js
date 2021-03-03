import React from 'react';
import { data } from '../../data';

const StepOne = ({ handleFormInput, formValues }) => {
  return (
    <div>
      <label>LANGUAGE</label>
      <select
        name="language"
        label="Language"
        value={formValues.language}
        onChange={handleFormInput}
        required
      >
        {data.map((item, i) => (
          <option key={i}>{item.language} </option>
        ))}
      </select>
    </div>
  );
};

export default StepOne;
