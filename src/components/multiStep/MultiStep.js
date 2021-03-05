import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StepDisplay from './StepDisplay';
import { WidgetContext } from '../../context/WidgetContext';
import styled from 'styled-components';

const MultiStep = () => {
  const [step, setStep] = useState(1);
  const { dispatch } = useContext(WidgetContext);
  let history = useHistory();

  const [formValues, setFormValues] = useState({
    language: 'Javascript',
    name: '',
  });

  const incrementStep = () => {
    setStep((previousStep) => previousStep + 1);
  };
  const decrementStep = () => {
    setStep((previousStep) => previousStep - 1);
  };

  const handleFormInput = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (formValues.name !== '') {
      dispatch({ type: 'ADD_WIDGET', widget: { ...formValues } });
      setFormValues({ language: 'Javascript', name: '' });
      history.push('/');
    } else {
      alert('Please enter a valid name');
    }
  };

  return (
    <div>
      <StepDisplay
        currentStep={step}
        handleFormInput={handleFormInput}
        formValues={formValues}
      />
      {step !== 1 ? (
        <>
          <Button onClick={decrementStep}>Back</Button>
          <Button onClick={(e) => handleSubmit(formValues)}>Create</Button>
        </>
      ) : null}
      {step !== 2 ? <Button onClick={incrementStep}>Next</Button> : null}
    </div>
  );
};

const Button = styled.button`
  border: none;
  padding: 5px;
  margin: 5px;
  font-size: 16px;
  font-weight: 600;
  background-color: black;
  color: #fff;
  min-width: 100px;
  border-radius: 8px;
`;

export default MultiStep;
