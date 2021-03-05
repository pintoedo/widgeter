import React from 'react';
import styled from 'styled-components';

const Button = ({ action, content }) => {
  return (
    <StyledButton title="button-test" onClick={action}>
      {content}
    </StyledButton>
  );
};

const StyledButton = styled.button`
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

export default Button;
