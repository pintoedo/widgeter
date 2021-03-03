import React from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

const StepDisplay = ({ currentStep, handleFormInput, formValues }) => {
  switch (currentStep) {
    case 1:
      return (
        <StepOne handleFormInput={handleFormInput} formValues={formValues} />
      );
    case 2:
      return (
        <StepTwo handleFormInput={handleFormInput} formValues={formValues} />
      );

    default:
      return null;
  }
};

export default StepDisplay;
