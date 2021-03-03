import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StepDisplay from './StepDisplay';
import { WidgetContext } from '../../context/WidgetContext';

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

  const validation = () => {
    if (formValues.name === '') {
      alert('Please insert name');
    } else {
      history.push('/');
    }
  };

  const handleSubmit = (e) => {
    dispatch({ type: 'ADD_WIDGET', widget: { ...formValues } });
    setFormValues({ language: 'Javascript', name: '' });
    validation();
  };

  return (
    <div>
      <StepDisplay
        currentStep={step}
        handleFormInput={handleFormInput}
        formValues={formValues}
      />
      <br />
      {step !== 1 ? (
        <>
          <button onClick={decrementStep}>Back</button>
          <button onClick={(e) => handleSubmit(formValues)}>Submit</button>
        </>
      ) : null}
      {step !== 2 ? <button onClick={incrementStep}>Next</button> : null}
    </div>
  );
};

export default MultiStep;
