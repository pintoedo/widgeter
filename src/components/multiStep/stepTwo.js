import React from 'react';
import { Field } from 'formik';
import { Redirect, Route, Link } from 'react-router-dom';

const StepTwo = (formikProps) => {
  const { errors, touched } = formikProps;
  console.log(formikProps.values);

  return (
    <>
      <Field name="name" label="Name" />
      {/* <Route exact path="/">
        <Redirect to="/" />
      </Route> */}
    </>
  );
};

export default StepTwo;
