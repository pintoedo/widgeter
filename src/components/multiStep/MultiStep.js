import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StepDisplay from './StepDisplay';
import { WidgetContext } from '../../context/WidgetContext';
import Button from '../button/Button';

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

  const validation = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;

  const handleSubmit = () => {
    if (validation.test(formValues.name)) {
      dispatch({ type: 'ADD_WIDGET', widget: { ...formValues } });
      setFormValues({ language: 'Javascript', name: '' });
      history.push('/');
    } else {
      alert('Please enter a valid name');
    }
  };

  return (
    <div title="multistep-test">
      <StepDisplay
        currentStep={step}
        handleFormInput={handleFormInput}
        formValues={formValues}
      />
      {step !== 1 ? (
        <>
          <Button action={decrementStep} content="Back" />
          <Button action={(e) => handleSubmit(formValues)} content="Create" />
        </>
      ) : null}
      {step !== 2 ? <Button action={incrementStep} content="Next" /> : null}
    </div>
  );
};

export default MultiStep;
