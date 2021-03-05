import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

it('renders button component correctly', () => {
  const { queryByTitle } = render(<Button />);
  const container = queryByTitle('button-test');
  expect(container).toBeTruthy();
});
