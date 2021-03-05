import React from 'react';
import { render } from '@testing-library/react';
import MultiStep from './MultiStep';
import { WidgetContext } from '../../context/WidgetContext';

it('renders multistep component correctly', () => {
  const mockdata = { id: 1, language: 'Java', name: 'TEST1' };
  const dispatch = () => {};

  const { queryByTitle } = render(
    <WidgetContext.Provider value={(mockdata, dispatch)}>
      <MultiStep data={mockdata} />
    </WidgetContext.Provider>,
  );
  const container = queryByTitle('multistep-test');
  expect(container).toBeTruthy();
});
