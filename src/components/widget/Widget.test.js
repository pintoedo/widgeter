import React from 'react';
import { render } from '@testing-library/react';
import Widget from './Widget';
import { WidgetContext } from '../../context/WidgetContext';

it('renders widget component correctly', () => {
  const mockdata = { id: 1, language: 'Java', name: 'TEST1' };
  const dispatch = () => {};

  const { queryByTitle } = render(
    <WidgetContext.Provider value={(mockdata, dispatch)}>
      <Widget data={mockdata} />
    </WidgetContext.Provider>,
  );
  const container = queryByTitle('widget-test');
  expect(container).toBeTruthy();
});
