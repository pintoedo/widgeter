import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

it('renders navbar component correctly', () => {
  const { queryByTitle } = render(<Navbar />);
  const container = queryByTitle('navbar-test');
  expect(container).toBeTruthy();
});
