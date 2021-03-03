import React from 'react';
import { Field } from 'formik';

const languages = [
  'Javacript',
  'Python',
  'PHP',
  'Java',
  'Solidity',
  'Kotlin',
  'C++',
  'Swift',
  'Go',
  'Rust',
];

const StepOne = (formikProps) => {
  const { errors, touched } = formikProps;
  return (
    <div>
      <Field name="language" label="Language">
        {/* {languages.map((item, i) => (
          <option key={i}>{item}</option>
        ))} */}
      </Field>
    </div>
  );
};

export default StepOne;
