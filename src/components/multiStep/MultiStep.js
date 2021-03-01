import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import StepButton from './StepButton';
import StepOne from './stepOne';
import StepTwo from './stepTwo';

const renderStep = (step, values, errors, touched) => {
  switch (step) {
    case 1:
      return <StepOne errors={errors} touched={touched} />;
    case 2:
      return <StepTwo errors={errors} touched={touched} values={values} />;
    default:
      return <StepOne errors={errors} touched={touched} />;
  }
};

const MultiStep = () => {
  const [step, setStep] = useState(1);
  const formData = {
    language: '',
    name: '',
  };

  const handleSubmit = () => setStep((step) => step + 1);

  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.language) {
  //     errors.language = 'Required';
  //   }
  //   if (!values.name) {
  //     errors.name = 'Required';
  //   }
  //   return errors;
  // };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ ...formData }}
        onSubmit={handleSubmit}
        // validate={validate}
      >
        {({ values, errors, touched }) => (
          <Form>
            {renderStep(step, values, errors, touched)}
            <StepButton step={step} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MultiStep;
