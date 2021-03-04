import React from 'react';
import MultiStep from '../../components/multiStep/MultiStep';
import styled from 'styled-components';

const Create = () => {
  return (
    <Container>
      {/* <h1>Create a new widget</h1> */}
      <MultiStep />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: auto;
`;

export default Create;
