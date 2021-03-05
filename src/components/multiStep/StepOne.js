import React from 'react';
import styled from 'styled-components';

const languages = [
  'Javascript',
  'Python',
  'PHP',
  'Java',
  'Solidity',
  'Kotlin',
  'Swift',
];

const StepOne = ({ handleFormInput, formValues }) => {
  return (
    <div>
      <Title>Step 1 - Select Language</Title>
      <Select
        name="language"
        label="Language"
        value={formValues.language}
        onChange={handleFormInput}
        required
      >
        {languages.map((item, i) => (
          <option key={i}>{item}</option>
        ))}
      </Select>
    </div>
  );
};

const Title = styled.h3`
  font-size: 16px;
  padding-top: 10px;
  font-weight: 700;
`;

const Select = styled.select`
  margin: 5px;
  padding: 5px;
  min-width: 300px;
  border-radius: 3px;
  border: solid 1px #7e7e7e;
  font-size: 18px;
`;

export default StepOne;
