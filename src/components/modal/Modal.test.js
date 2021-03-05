import React from 'react';
import { render } from '@testing-library/react';
import DeleteModal from './Modal';
import { WidgetContext } from '../../context/WidgetContext';

it('renders modal component correctly', () => {
  const mockdata = { id: 1, language: 'Java', name: 'TEST1' };
  const dispatch = () => {};

  const { queryByTitle } = render(
    <WidgetContext.Provider value={(mockdata, dispatch)}>
      <DeleteModal data={mockdata} />
    </WidgetContext.Provider>,
  );
  const container = queryByTitle('modal-test');
  expect(container).toBeTruthy();
});
