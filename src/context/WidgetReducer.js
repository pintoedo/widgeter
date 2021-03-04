import { v4 as uuidv4 } from 'uuid';
export const widgetReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WIDGET':
      return [
        ...state,
        {
          language: action.widget.language,
          name: action.widget.name.trim(),
          id: uuidv4(),
        },
      ];
    case 'REMOVE_WIDGET':
      return state.filter((widget) => widget.id !== action.id);
    default:
      return state;
  }
};
