import React from 'react';
import styled from 'styled-components';

const StepTwo = ({ handleFormInput, formValues }) => {
  return (
    <div>
      <Title>Step 2 - Enter name</Title>
      <Input
        label="name"
        name="name"
        value={formValues.name}
        onChange={handleFormInput}
        required
      />
    </div>
  );
};

const Title = styled.h3`
  font-size: 16px;
  padding-top: 10px;
  font-weight: 700;
`;

const Input = styled.input`
  margin: 5px;
  padding: 5px;
  min-width: 300px;
  border-radius: 3px;
  border: solid 1px #7e7e7e;
  font-size: 18px;
`;
export default StepTwo;
