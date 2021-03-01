import React from 'react';

const StepButton = (props) => {
  const { step } = props;

  switch (step) {
    case 1:
      return (
        <>
          <button variant="contained" type="submit">
            Next
          </button>
        </>
      );
    case 2:
      return (
        <>
          <button variant="contained" type="submit">
            Create
          </button>
        </>
      );
    default:
      return <></>;
  }
};

export default StepButton;
