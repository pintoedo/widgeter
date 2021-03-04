import React from 'react';
import MultiStep from '../../components/multiStep/MultiStep';
import styled from 'styled-components';

const Create = () => {
  return (
    <Container>
      <h2>Create a new widget</h2>
      <MultiStep />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  justify-content: center;
  list-style: none;
  margin: auto;
`;

export default Create;
