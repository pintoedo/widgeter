import React, { createContext, useReducer, useEffect } from 'react';
import { widgetReducer } from './WidgetReducer';

export const WidgetContext = createContext();

const WidgetContextProvider = (props) => {
  const [widgets, dispatch] = useReducer(widgetReducer, [], () => {
    const localData = localStorage.getItem('widgets');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('widgets', JSON.stringify(widgets));
  }, [widgets]);

  return (
    <WidgetContext.Provider value={{ widgets, dispatch }}>
      {props.children}
    </WidgetContext.Provider>
  );
};

export default WidgetContextProvider;
