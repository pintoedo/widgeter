import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StepDisplay from './StepDisplay';
import { WidgetContext } from '../../context/WidgetContext';

const MultiStep = () => {
  const [step, setStep] = useState(1);
  const { dispatch } = useContext(WidgetContext);

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

  let history = useHistory();

  const handleSubmit = (e) => {
    // e.preventDefault();
    dispatch({ type: 'ADD_WIDGET', widget: { ...formValues } });
    setFormValues({ language: 'Javascript', name: '' });
    history.push('/');
  };

  return (
    <div className="App">
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
